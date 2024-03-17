import React, { useState, useEffect } from "react";
import Hero from "./compo/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navs from "./compo/Navbar";
import Cardslide from "./compo/Cardslide";
import Bigcard from "./compo/Bigcard";
import Footer from "./compo/Footer";
import Profilepage from "./components/Profilepage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Chatbot from "./components/chatbot";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div>
        <Navs scrolled={scrolled} />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Cardslide />
                <Bigcard />
                <Footer />
              </div>
            }
          />
          <Route path="/chatg" element={<Chatbot />} />
          <Route path="/profiles" element={<Profile />} />
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
