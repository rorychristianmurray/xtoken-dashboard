import React, { useState } from 'react';
import axios from 'axios'
import Web3 from 'web3'

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

const Overview = () => {
  const [minted, setMinted] = useState([])
  const [avgMinted, setAvgMinted] = useState([])
  const [medianMinted, setMedianMinted] = useState([])

  const getMinted = () => {
    axios.get('http://localhost:5001/mint')
    .then(res => {
      console.log("res.data.mintEvents : ", res.data.mintEvents)
      setMinted(res.data.mintEvents)
    })
    .catch(err => {
      console.log("err : ", err)
    })
  }

  const getAverageMinted = () => {
    axios.get('http://localhost:5001/avgminted')
    .then(res => {
      setAvgMinted(res.data.avgMinted)
    })
    .catch(err => {
      console.log("err : ", err)
    })
  }

  const getMedianMinted = () => {
    axios.get('http://localhost:5001/medianminted')
    .then(res => {
      console.log("res.data : ", res.data)
      setMedianMinted(res.data.medianMinted)
    })
    .catch(err => {
      console.log("err : ", err)
    })
  }

  return (
    <div className="columns">

      <div className="column">
        <div className="button get-minted-btn" onClick={getMinted}>get total minted</div>
        <div>total minted : {minted.length} </div>
      </div>

      <div className="column">
        <div className="button get-minted-btn" onClick={getAverageMinted}>get avg minted</div>
        <div>avg minted : {avgMinted} </div>
      </div>

      <div className="column">
        <div className="button get-minted-btn" onClick={getMedianMinted}>get median minted</div>
        <div>median minted : {medianMinted} </div>
      </div>

    </div>
  );
};

export default Overview;
