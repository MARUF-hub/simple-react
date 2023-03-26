import React from "react";
import logo from "./logo.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home pt-4 d-flex justify-content-around" id="home">
      <div className="home-content">
        <div className="img">
          <img className="img-logo" src={logo} alt="" />
        </div>
        <div>
          <h1 className="text">Indian Premier League</h1>
        </div>
      </div>
      <div className="teams">
        <h6 className="w-100 text-center title mb-4">Standing</h6>
        <div className="heading d-flex justify-content-around mb-1 mt-2">
          <h6>Teams</h6>
          <h6>PLD</h6>
          <h6>Net RR</h6>
          <h6>PTS</h6>
        </div>
        <div className="team-details">
          <h6>CSK</h6>
          <h6>0</h6>
          <h6>0</h6>
          <h6>0</h6>
        </div>
        <div className="team-details">
          <h6>DC</h6>
          <h6>0</h6>
          <h6>0</h6>
          <h6>0</h6>
        </div>
        <div className="team-details">
          <h6>GT</h6>
          <h6>0</h6>
          <h6>0</h6>
          <h6>0</h6>
        </div>
        <div className="team-details">
          <h6>KKR</h6>
          <h6>0</h6>
          <h6>0</h6>
          <h6>0</h6>
        </div>
        <div className="team-details">
          <h6>MI</h6>
          <h6>0</h6>
          <h6>0</h6>
          <h6>0</h6>
        </div>
        <div className="team-details">
          <h6>PBKS</h6>
          <h6>0</h6>
          <h6>0</h6>
          <h6>0</h6>
        </div>
        <div className="team-details">
          <h6>RR</h6>
          <h6>0</h6>
          <h6>0</h6>
          <h6>0</h6>
        </div>
        <div className="team-details">
          <h6>RCB</h6>
          <h6>6</h6>
          <h6>0</h6>
          <h6>0</h6>
        </div>
        <div className="team-details">
          <h6>SRH</h6>
          <h6>0</h6>
          <h6>0</h6>
          <h6>0</h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
