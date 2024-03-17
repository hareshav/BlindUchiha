import React, { useRef } from "react";
import "./Profilehero.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { utils } from "ethers";
function MyVerticallyCenteredModal1(props) {
  let contractAddress = "0x911b6e0f0b129A99D05c8FBfFEf27A6Af3bd1aE4";
  const { contract } = useContract(contractAddress);
  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "invest"
  );
  const value1 = useRef(null);
  const handleInvest = async () => {
    try {
      //   let valueString = value1.current.value;
      //   let value = parseInt(valueString);
      //   value = value / 100000000000000000;
      const valueInWei = utils.parseEther(
        (parseInt(value1.current.value) / 1000000000000000000)
          .toFixed(20)
          .toString()
      ); // Replace with the desired amount in ETH
      const tx = await mutateAsync({
        contract, // Reference to your contract instance
        functionName: "invest", // Replace with your payable function name // Optional arguments (if needed)
        overrides: {
          value: valueInWei, // Set the amount of ETH to send
        },
      });
      console.log("Transaction hash:", tx.hash);
    } catch (error) {
      console.error("Investment error:", error);
      // Handle transaction error (important)
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="popup">
        <Modal.Title id="contained-modal-title-vcenter">INVEST</Modal.Title>
      </Modal.Header>
      <Modal.Body className="popup">
        <h4>ENTER AMOUNT TO INVEST</h4>
        <input type="text" className="field" ref={value1} />
      </Modal.Body>
      <Modal.Footer className="popup">
        <Web3Button contractAddress={contractAddress} action={handleInvest}>
          Invest
        </Web3Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal2(props) {
  let contractAddress = "0x911b6e0f0b129A99D05c8FBfFEf27A6Af3bd1aE4";
  const value2 = useRef(null);
  const { contract } = useContract(contractAddress);
  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "mortgageEther"
  );
  const handleMortage = async () => {
    try {
      //   let valueString = value1.current.value;
      //   let value = parseInt(valueString);
      //   value = value / 100000000000000000;
      const valueInWei = utils.parseEther(
        (parseInt(value2.current.value) / 1000000000000000000)
          .toFixed(20)
          .toString()
      ); // Replace with the desired amount in ETH
      const tx = await mutateAsync({
        contract, // Reference to your contract instance
        functionName: "mortgageEther", // Replace with your payable function name // Optional arguments (if needed)
        overrides: {
          value: valueInWei, // Set the amount of ETH to send
        },
      });
      console.log("Transaction hash:", tx.hash);
    } catch (error) {
      console.error("Investment error:", error);
      // Handle transaction error (important)
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="border"
    >
      <Modal.Header closeButton className="popup top">
        <Modal.Title id="contained-modal-title-vcenter">MORTAGE</Modal.Title>
      </Modal.Header>
      <Modal.Body className="popup side">
        <h4>ENTER AMOUNT TO MORTAGE</h4>
        <input type="text" className="field" ref={value2} />
      </Modal.Body>
      <Modal.Footer className="popup bottom">
        <Web3Button contractAddress={contractAddress} action={handleMortage}>
          Mortage
        </Web3Button>
      </Modal.Footer>
    </Modal>
  );
}

function Profilehero() {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div className="pmain">
      <div className="pflex">
        <div className="pgrid one">
          <div className="content">
            <h2 style={{ color: "white" }}>INVEST</h2>
            <p>
              Ready to grow your wealth? With our invest function, you can
              securely invest your funds and watch them grow over time. Whether
              you're new to investing or a seasoned investor, our platform
              provides opportunities suited to your financial goals. Take
              advantage of our user-friendly interface, transparent investment
              options, and expert guidance to start investing confidently today
            </p>
            <Button
              variant="primary"
              className="popbtn"
              onClick={() => setModalShow1(true)}
            >
              Invest
            </Button>

            <MyVerticallyCenteredModal1
              show={modalShow1}
              onHide={() => setModalShow1(false)}
            />
          </div>
          <div className="picture">
            <img src={img1} alt="image" />
          </div>
        </div>
        <div className="pgrid two">
          <div className="picture">
            <img src={img2} alt="img" />
          </div>
          <div className="content">
            <h2 style={{ color: "white" }}>MORTAGE</h2>
            <p>
              Unlock the power of your Ethereum holdings with our mortgage Ether
              feature. By leveraging your Ether assets, you can access instant
              liquidity while retaining ownership. Whether you need funds for
              personal expenses, investment opportunities, or emergencies, our
              platform provides a seamless and transparent process. Put your
              Ether to work and explore the possibilities of mortgage
              lending with us today
            </p>
            <Button
              variant="primary"
              className="popbtn"
              onClick={() => setModalShow2(true)}
            >
              Mortage
            </Button>

            <MyVerticallyCenteredModal2
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profilehero;
