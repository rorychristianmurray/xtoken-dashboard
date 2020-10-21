import React, { useState } from 'react';
import Overview from "./Overview"
import { getContractAbi } from "../assets/constants"
import "../styles/XCardStyles.scss"

const XCard = () => {
  const [tab, setTab] = useState("overview")

  console.log("getContractAbi : ", getContractAbi)

  // let c = getContractAbi()

  let displayTab
  if (tab === "overview") {
    displayTab = <Overview />
  } else if (tab === "avg-mint") {
    displayTab = <div>average mint</div>
  } else if (tab === "mint") {
    displayTab = <div>mint</div>
  } else if (tab === "hack") {
    displayTab = <div>hack addresses</div>
  }

  return (
    <div className="card x-card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <div className="title is-4">xToken Dashboard</div>
          </div>
        </div>

        <div className="x-card-menu columns">
          <div className="column x-card-menu-choice" onClick={() => setTab("overview")}>
            Overview
          </div>

          <div className="column x-card-menu-choice" onClick={() => setTab("mint")}>
            Mint
          </div>
          <div className="column x-card-menu-choice" onClick={() => setTab("hack")}>
            Hack Addresses
          </div>
        </div>

        <div className="columns">
          <div className="column">
            {displayTab}
          </div>
        </div>

      </div>
    </div>
  );
};

export default XCard;
