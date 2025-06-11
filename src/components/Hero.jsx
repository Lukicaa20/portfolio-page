import React from "react";
import "../style/Hero.scss";
import CountUp from "react-countup";
import { useSelector } from "react-redux";

const Hero = () => {
  const visits = useSelector((state) => state.data.visits.visits);
  const loading = useSelector((state) => state.data.loading);
  console.log(loading);

  return (
    <div className="hero">
      <h1>Luka Kolak</h1>
      {loading ? (
        <p className="visit-counter"> Loading visitors...</p>
      ) : visits !== null ? (
        <p className="visit-counter">
          👁️ <CountUp end={visits} duration={4} /> profile visits
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Hero;
