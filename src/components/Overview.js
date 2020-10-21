import React, { useState } from 'react';
import Web3 from 'web3'

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

const Overview = () => {
  const [minted, setMinted] = useState("")

  const getMinted = () => {
    console.log("get minted")
  }

  return (
    <div className="columns">
      <div className="column">
        <div className="button get-minted-btn" onClick={getMinted}>get total minted</div>
        <div>total minted : {minted} </div>
      </div>
      
    </div>
  );
};

export default Overview;
