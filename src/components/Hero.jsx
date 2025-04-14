import React from "react";
import "../style/Hero.scss";
import CountUp from "react-countup";

const Hero = ({ visits }) => {
  return (
    <div className="hero">
      <h1>Luka Kolak</h1>
      {visits !== null && (
        <p className="visit-counter">
          👁️ <CountUp end={visits} duration={4} /> posjeta profilu
        </p>
      )}
    </div>
  );
};

export default Hero;
