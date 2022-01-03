import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { actSwitchPage } from "./../redux/action";

const Side = () => {
  let btn = useSelector((store) => store.btns);
  const dispatch = useDispatch();
  console.log(btn);

  return (
    <div
      className="w3-sidebar w3-bar-block w3-card-4"
      style={{ position: "fixed", paddingTop: "20px", width: "15%" }}
    >
      <h3 className="w3-bar-item w3-center">Simulation</h3>
      <button
        className={`w3-button w3-bar-item w3-border-top w3-border-bottom ${btn[0]}`}
        onClick={() => dispatch(actSwitchPage("About"))}
      >
        About
      </button>
      <button
        className={`w3-button w3-bar-item  w3-border-bottom ${btn[1]}`}
        onClick={() => dispatch(actSwitchPage("Simulation"))}
      >
        Simulation
      </button>
    </div>
  );
};

export default Side;
