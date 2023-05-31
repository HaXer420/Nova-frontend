import React, { useState, useEffect } from "react";
import "./myReward.css";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../button/Button";
import { calenderIcon, dollarIcon, rewardIcon } from "../../assets";
import routes from "../../api/routes";
import { callApi } from "../../api/apiCaller";
import Loader from "../loader/loader";
import dayjs from "dayjs";
const maxValue = 500;
const minValue = 250;
const percentage = (minValue / maxValue) * 100;

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
  const [isloading, setIsLoading] = useState(false);
  const [availableCredit, setAvailableCredit] = useState(0);
  const [useCredit, setUsedCredit] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [points, setPoints] = useState({ totalpoints: 0, availablepoints: 0 });
  const [rewards, setRewards] = useState([]);

  const getMyRewards = () => {
    let getRes = (res) => {
      //console.log("res of my get rewrds", res);
      setAvailableCredit(res?.credits?.availablecredit);
      setTotalCredit(res?.credits?.totalcredit);
      setUsedCredit(res?.credits?.usedcredit);
      setPoints(res?.points);
      setRewards(res?.rewards);
    };
    callApi("GET", routes.myRewards, null, setIsLoading, getRes, (error) => {});
  };

  const cardArr = [
    {
      id: 1,
      title: "Availability Credits",
      amount: availableCredit.toFixed(2),
    },
    {
      id: 2,
      title: "Used Credits",
      amount: useCredit.toFixed(2),
    },
    {
      id: 3,
      title: "Total Credits",
      amount: totalCredit.toFixed(2),
    },
  ];

  useEffect(() => {
    getMyRewards();
  }, []);
  return (
    <div className="nova-my-profile-my_rewards-main-container">
      <Loader loading={isloading} />
      <div className="nova-my_profile-circle-progress-bar-container">
        <CircularProgressbarWithChildren
          styles={buildStyles({
            pathColor: "#EE509C",
            trailColor: "#FFC9E3",
            rotation: 0.5 + (1 - percentage / 80) / 2,
          })}
          value={points?.availablepoints}
          maxValue={points?.totalpoints}
        >
          <div className="nova-progress-bar-circular-text-container">
            <h2>{points?.availablepoints}</h2>
            <p>{`of ${points?.totalpoints} points`}</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="nova-my_profile-payment-card-details">
        <div className="nova-my_profile-card-details-payment-main-container">
          {cardArr.map((item) => (
            <div className="nova-my_profile-card-details-payment-container">
              <h1>{item.title}</h1>
              <h2>${item.amount}</h2>
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
        {rewards?.map((item) => (
          <>
            <div className="nova-my-rewards-point-details-container">
              <div className="nova-my-rewards-point-details-date-container">
                <img src={calenderIcon} alt="calender-icon" />
                <p>{dayjs(item?.createdAt).format("ddd, MMM, DD, YYYY")}</p>
              </div>
              <div className="nova-my-rewards-point-details-payment-container">
                <img src={dollarIcon} alt="dollar-icon" />
                <p>${item?.amount.toFixed(2)}</p>
              </div>
              <div className="nova-my-rewards-point-details-date-container">
                <img src={rewardIcon} alt="reward-icon" />
                <p>{item?.points} Points</p>
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
