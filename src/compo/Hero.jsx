import React from "react";
import "D:/HCJ/croud/cliend/src/compo/Hero.css";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Buttons from "./Button.jsx";

function Hero() {
  return (
    <div className="divv">
      <div className="maindiv">
        <div className="containerhero">
          <h1>Blind Uchiha</h1>
          <h5>
            <i>
              Step into a realm of financial possibility with our innovative
              platform. Explore effortless passive income opportunities and
              unlock access to valuable assets. Your gateway to a dynamic
              digital landscape starts here
            </i>

            <Link to="/profiles">
              <Buttons btnname="Profile" className="herobtn" />
            </Link>
          </h5>
        </div>
      </div>
      <div className="subdiv">
        <div className="content">
          <h5>
            The possibilities that our app <br />
            opens for you !
          </h5>
        </div>
        <div className="sdiv">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Vault">
              Access mortgage-backed cryptos for investment opportunities
            </Tab>
            <Tab eventKey="profile" title="Liquidity">
              Secure instant loans by lending your cryptos within the Web3
              ecosystem
            </Tab>
            <Tab eventKey="contact" title="Advisor">
              Leverage AI for personalized financial guidance tailored to Web3
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
export default Hero;
