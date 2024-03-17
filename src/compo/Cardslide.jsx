import React from "react";
import Card from "./Card";
import "./Cardslide.css";

function Cardslide() {
  return (
    <div>
      <h1 className="para">Web3 Finance: Our Triple Feature Suite</h1>
      <div className="cardslide">
        <Card
          title="Cryptocurrency Investment Hub"
          data="Dive into the Cryptocurrency Investment Hub, where mortgage-backed assets await your strategic investments in the thriving Web3 landscape. Explore diverse opportunities and maximize your returns with ease"
          btnname="BTN1"
        />
        <Card
          title="Instant Liquidity Solutions
          "
          data="Experience Instant Liquidity Solutions: seamlessly lend cryptos for immediate loans, tailored to your needs within Web3. Unlock liquidity and leverage assets for instant funds"
          btnname="BTN2"
        />
        <Card
          title="AI-Powered Financial Guidance"
          data="Experience AI-Powered Financial Guidance, tailored to your Web3 portfolio, providing personalized insights and strategies for optimized decision-making. Harness the future of finance with intelligent advice at your fingertips"
          btnname="BTN3"
        />
      </div>
    </div>
  );
}

export default Cardslide;
