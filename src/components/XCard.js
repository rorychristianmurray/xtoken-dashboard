import React, { useState } from 'react';
import Overview from "./Overview"
import Composition from "./Composition"
import "../styles/XCardStyles.scss"

const XCard = () => {
  const [tab, setTab] = useState("overview")
  
  let displayTab
  if (tab === "overview") {
    displayTab = <Overview />
  } else if (tab === "composition") {
    displayTab = <Composition />
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

          <div className="column x-card-menu-choice" onClick={() => setTab("composition")}>
            Composition
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
