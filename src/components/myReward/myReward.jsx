import React from "react";
import "./myReward.css";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../button/Button";
import { calenderIcon, dollarIcon, rewardIcon } from "../../assets";
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
const rewardArr = [
  {
    id: 1,
    points: "225",
  },
  {
    id: 2,
    points: "225",
  },
  {
    id: 3,
    points: "225",
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
      <div className="nova-my-rewards-point-details-main-container">
        {rewardArr.map((item) => (
          <>
            <div className="nova-my-rewards-point-details-container">
              <div className="nova-my-rewards-point-details-date-container">
                <img src={calenderIcon} alt="calender-icon" />
                <p>Tue Feb, 21 2023</p>
              </div>
              <div className="nova-my-rewards-point-details-payment-container">
                <img src={dollarIcon} alt="dollar-icon" />
                <p>$10.00</p>
              </div>
              <div className="nova-my-rewards-point-details-date-container">
                <img src={rewardIcon} alt="reward-icon" />
                <p>225 Points</p>
              </div>
            </div>
            <div className="nova-my-rewards-point-details-bottom-border" />
          </>
        ))}
      </div>
    </div>
  );
};

export default MyReward;
