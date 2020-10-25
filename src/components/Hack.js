import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Hack = () => {
  const [hacked, setHacked] = useState([])
  const [potentials, setPotentials] = useState([])

  useEffect(() => {
    getAllHacked()
    getPotentials()
  }, [])

  const getAllHacked = () => {
    axios.get('https://xtoken-server.herokuapp.com/hacked')
    .then(res => {
      let h = []
      for (const v of Object.values(res.data.hacked)) {
        h.push(v)
      }
      setHacked(h)
    })
    .catch(err => {
      console.log("err : ", err)
    })
  }

  const getPotentials = () => {
    axios.get('https://xtoken-server.herokuapp.com/potentials')
    .then(res => {
      let s = []
      for (const v of Object.values(res.data.potentials)) {
        s.push(v)
      }
      setPotentials(s)
    })
    .catch(err => {
      console.log("err : ", err)
    })
  }

  return (
    <>
      <div className="columns overview-cols is-centered">
        <div className="column overview-col is-half">

          <div className="overview-det"><span   className="overview-det-name">Total Hacked :</span> {hacked.length}</div>
          <div className="overview-det"><span className="overview-det-name">Total Suspects :</span> {potentials.length}</div>

        </div>
      </div>

      <div className="columns">
        <div className="column">
          <table className="table">

            <thead>
              <tr>
                <th>User</th>
                <th>Time</th>
                <th>Type</th>
                <th>Etherscan</th>
              </tr>
            </thead>

            <tbody>
              {hacked.map(entry => {
                return (
                  <tr key={entry.user}>
                  <td>{entry.user}</td>
                  <td>{entry.timestamp}</td>
                  <td>{entry.type}</td>
                  <td><a href={`https://etherscan.io/tx/${entry.trx}`}>Etherscan</a></td>
                </tr>
                )
              })}
              {potentials.map(entry => {
                return (
                  <tr key={entry.user}>
                  <td>{entry.user}</td>
                  <td>{entry.timestamp}</td>
                  <td>{entry.type}</td>
                  <td><a href={`https://etherscan.io/tx/${entry.trx}`}>Etherscan</a></td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>


    </>


  );
};

export default Hack;
