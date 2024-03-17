import React from "react";
import {
  useContract,
  useContractWrite,
  useContractRead,
  useAddress,
} from "@thirdweb-dev/react";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
async function Profilepage() {
  let contractAddress = "0x911b6e0f0b129A99D05c8FBfFEf27A6Af3bd1aE4";
  const { contract } = useContract(contractAddress);
  const { data, isloading } = useContractRead(contract, "users", [
    useAddress(),
  ]);

  console.log(data);
  const decimalValues = data.map((item) => {
    // Convert hexadecimal to decimal
    const decimalValue = BigInt(item.hex).toString();
    return decimalValue;
  });

  console.log("decimal value" + decimalValues);
  return (
    <div className="profilemain">
      <div className="profiletop">
        <div className="topleft"></div>
        <div className="topright"></div>
      </div>

      <div className="profilebottom">
        <div className="bottomleft"></div>
        <div className="bottomright"></div>
      </div>
    </div>
  );
}

export default Profilepage;
