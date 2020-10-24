import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Overview = () => {
  const [mintedETH, setMintedETH] = useState(0)
  const [mintedSNX, setMintedSNX] = useState(0)

  const getMintedViaETH = () => {
    axios.get('https://xtoken-server.herokuapp.com/mintedviaeth')
    .then(res => {
      setMintedETH(res.data.mintedViaETH)
    })
    .catch(err => {
      console.log("err : ", err)
    })
  }

  const getMintedViaSNX = () => {
    axios.get('https://xtoken-server.herokuapp.com/mintedviasnx')
    .then(res => {
      setMintedSNX(res.data.mintedViaSNX)
    })
    .catch(err => {
      console.log("err : ", err)
    })
  }

  useEffect(() => {
    getMintedViaETH()
    getMintedViaSNX()
  })


  return (
  <div className="columns overview-cols is-centered">
    <div className="column overview-col is-half">
      <div className="overview-det"><span className="overview-det-name">xSNXa Minted via ETH :</span> {mintedETH}%
      </div>

      <div className="overview-det"><span className="overview-det-name">xSNXa Minted via SNX :</span> {mintedSNX}%
      </div>

    </div>
  </div>
  );
};

export default Overview;
