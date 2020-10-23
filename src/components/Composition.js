import React, { useState } from 'react';
import axios from 'axios'
import Web3 from 'web3'

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

const Overview = () => {
  const [mintedETH, setMintedETH] = useState(0)
  const [mintedSNX, setMintedSNX] = useState(0)

  const getMintedViaETH = () => {
    axios.get('http://localhost:5001/mintedviaeth')
    .then(res => {
      console.log("res.data : ", res.data)

      setMintedETH(res.data.mintedViaETH)
    })
    .catch(err => {
      console.log("err : ", err)
    })
  }

  const getMintedViaSNX = () => {
    axios.get('http://localhost:5001/mintedviasnx')
    .then(res => {
      setMintedSNX(res.data.mintedViaSNX)
    })
    .catch(err => {
      console.log("err : ", err)
    })
  }


  return (
    <div className="columns">

      <div className="column">
        <div className="button get-minted-btn" onClick={getMintedViaETH}>get minted via ETH</div>
        <div>ETH % : {mintedETH}% </div>
      </div>

      <div className="column">
        <div className="button get-minted-btn" onClick={getMintedViaSNX}>get minted via SNX</div>
        <div>SNX % : {mintedSNX}% </div>
      </div>

    </div>
  );
};

export default Overview;
