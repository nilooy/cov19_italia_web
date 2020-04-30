import React from "react";
import CountUp from "react-countup";

const CardStat = (props) => {
  return (
    <div
      className={
        "card mb-3 border-default " + (props.darkMode ? "darkMode" : "")
      }
      style={{ width: "100%" }}
    >
      <div className="card-body text-success">
        <h5
          className={
            "card-title " + (props.darkMode ? "darkMode-text" : "text-dark")
          }
        >
          {props.title}
        </h5>
        <h5 className="card-text">
          {!props.dateField && <CountUp end={parseInt(props.text)} />}
          {props.dateField && props.text}
        </h5>
      </div>
    </div>
  );
};

export default CardStat;
