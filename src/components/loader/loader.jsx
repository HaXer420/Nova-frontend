import React from "react";
import "./loader.css";
import { Puff } from "react-loader-spinner";

const Loader = ({ loading, mainContainer }) => {
  return (
    <>
      {loading && (
        <div
          style={{ ...mainContainer }}
          className="nova-loader-main-container"
        >
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#EE509C"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default Loader;
