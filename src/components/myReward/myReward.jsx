import React from "react";
import "./myReward.css";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../button/Button";
const maxValue = 500;
const minValue = 250;
const percentage = (minValue / maxValue) * 100;

const cardArr = [
  {
    id: 1,
    title: "Availability Credits",
    amount: "$14.50",
  },
  {
    id: 2,
    title: "Used Credits",
    amount: "$14.50",
  },
  {
    id: 3,
    title: "Total Credits",
    amount: "$14.50",
  },
];
const MyReward = () => {
  return (
    <div className="nova-my-profile-my_rewards-main-container">
      <div className="nova-my_profile-circle-progress-bar-container">
        <CircularProgressbarWithChildren
          styles={buildStyles({
            pathColor: "#EE509C",
            trailColor: "#FFC9E3",
            rotation: 0.5 + (1 - percentage / 80) / 2,
          })}
          value={minValue}
          maxValue={maxValue}
        >
          <div className="nova-progress-bar-circular-text-container">
            <h2>{minValue}</h2>
            <p>{`of ${maxValue} points`}</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="nova-my_profile-payment-card-details">
        <div className="nova-my_profile-card-details-payment-main-container">
          {cardArr.map((item) => (
            <div className="nova-my_profile-card-details-payment-container">
              <h1>{item.title}</h1>
              <h2>{item.amount}</h2>
            </div>
          ))}
        </div>
      </div>
      <div style={{ alignSelf: "center", marginTop: "3rem" }}>
        <Button>Redeem</Button>
      </div>
      <div className="nova-payment-card-previous-rewards-title">
        <h2>Previous Rewards</h2>
      </div>
      <div className="nova-my-rewards-point-details-main-container"></div>
    </div>
  );
};

export default MyReward;
