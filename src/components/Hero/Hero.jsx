import React from "react";
import "./Hero.scss";
import CountUp from "react-countup";
import { useSelector } from "react-redux";

const Hero = () => {
  const visits = useSelector((state) => state.data.visits.visits);
  const loading = useSelector((state) => state.data.loading);
  const isMobile = useSelector((state) => state.ui.isMobile);

  return (
    <>
      {isMobile ? (
        <div className="hero-mobile">
          {loading ? (
            <p className="visit-counter">Loading visitors...</p>
          ) : visits !== null ? (
            <p className="visit-counter">Hello visitor number: {visits}</p>
          ) : (
            ""
          )}
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Hero;
