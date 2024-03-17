import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";




const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [data2, setData2] = useState(null);
  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onSend = async (valueToSend) => {
    try {
      const response = await fetch(
        `http://localhost:4001/cryptoinvest?query=${valueToSend}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData2(data.output);
      console.log(data.output);
      console.log("Response from Flask server:", data);

      // Add the received message to the messages state
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: valueToSend, user: true },
      ]);
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: data.output, user: false },
      ]);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="full">
      <div className="d-flex align-items-center justify-content-center chat-title">
        <h2>InvestIQ</h2>
      </div>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <div style={{ overflowY: "auto" }}>
          {messages.map((data, index) => (
            <ChatMessage
              key={index}
              message={data.message}
              user={data.user}
              data={data2}
            />
          ))}
          <div ref={messageEndRef} />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            position: "fixed",
          }}
        >
          <div
            style={{
              padding: "10px",
              background: "#f2f2f2",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              type="text"
              placeholder="Enter the prompt to generate"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              className="btn btn-primary ms-3 send-btn"
              onClick={() => onSend(text)}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
