import React from "react";
import "./Bigcard.css";

function Bigcard() {
  return (
    <div className="bcard">
      <div className="icard1">
        <div className="head">SECURITY</div>
        <div className="body">
          Security measures have been thoughtfully devised and seamlessly
          integrated to fortify the system against potential vulnerabilities and
          unauthorized access, thereby enhancing its resilience and safeguarding
          sensitive operations and data.{" "}
        </div>
      </div>
      <div className="icard2">
        <div className="head">INVESTIQ:</div>
        <div className="body">
          <p>
            "Introducing MoneyGenie, your gateway to real-time financial
            insights seamlessly integrated with coindesk.com. Stay ahead of
            cryptocurrency trends, explore investment opportunities, and receive
            expert advice effortlessly. Embark on a journey into the future of
            finance with our cutting-edge chatbot, MoneyGenie."
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Bigcard;
