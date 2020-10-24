import React, { useState, useEffect } from 'react';
import axios from 'axios'
import numeral from 'numeral'

const Overview = () => {
  const [minted, setMinted] = useState([])
  const [avgMinted, setAvgMinted] = useState([])
  const [medianMinted, setMedianMinted] = useState([])
  const [burns, setBurns] = useState([])

  const getMinted = () => {
    axios.get('http://localhost:5001/mint')
    .then(res => {
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
      setMedianMinted(res.data.medianMinted)
    })
    .catch(err => {
      console.log("err : ", err)
    })
  }

  const getAllBurns = () => {
    axios.get('http://localhost:5001/burns')
    .then(res => {
      setBurns(res.data.burnEvents)
    })
    .catch(err => {
      console.log("err : ", err)
    })
  }

  useEffect(() => {
    getMinted()
    getAllBurns()
    getAverageMinted()
    getMedianMinted()
  }, [])


  return (
    <div className="columns overview-cols is-centered">
      <div className="column overview-col is-half">

        <div className="overview-det"><span className="overview-det-name">Total Mints :</span> {minted.length} </div>

        <div className="overview-det"><span className="overview-det-name">Total Burns :</span> {burns.length}</div>

        <div className="overview-det"><span className="overview-det-name">Avg Minted :</span> {numeral(avgMinted).format('0,0')} </div>

        <div className="overview-det"><span className="overview-det-name">Median Minted :</span> {numeral(medianMinted).format('0,0')} </div>

      </div>
    </div>
  );
};

export default Overview;
