import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validateForm } from "./../Function/inputs";
import { sheet1Calc } from "./../Function/Calc";
import { bulkAdd, bulkDelete } from "./../Function/sheets";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setSheet1Data } from "./../redux/action";

import { actSetDays } from "./../redux/action";

const SimForm1 = () => {
  const initState = useSelector((store) => store.simForm);
  const sheet1 = useSelector((store) => store.sheets.sheet1);
  const [inputs, setInputs] = useState(initState);
  const [fColor, setFColor] = useState("w3-blue");
  const dispatch = useDispatch();

  async function SubmitForm() {
    if (validateForm(inputs) === false) {
      toast.error("Form Not Filled Correctly");
      return;
    }
    toast.info("Loading .....");
    let calc = sheet1Calc(inputs);
    let del = await bulkDelete("range", sheet1);
    let add = await bulkAdd(sheet1, calc);
    console.log("bulk delete", del);
    if (del.status !== true || add.status !== true) {
      toast.error("Error Creating Values");
      return;
    }
    toast.dismiss();
    toast.success("Data Generated");
    dispatch(setSheet1Data(calc, inputs));
  }

  return (
    <div className="w3-card-4 w3-round">
      <h3 className={`${fColor} w3-center thickText w3-padding`}>
        Set Calculation Inputs
      </h3>
      <div className="w3-container">
        <div className="w3-row-padding">
          <div className="w3-col m6">
            <p>
              <label>Number Of Bikes</label>
              <input
                className="w3-input w3-border"
                type="Number"
                value={inputs.bikes}
                onChange={(e) =>
                  setInputs({ ...inputs, bikes: e.target.value })
                }
              ></input>
            </p>
            <p>
              <label>Swap Station Starting Battery</label>
              <input
                className="w3-input w3-border"
                type="Number"
                value={inputs.swapStation}
                onChange={(e) =>
                  setInputs({ ...inputs, swapStation: e.target.value })
                }
              ></input>
            </p>
            <p>
              <label>Working Hours Per Day</label>
              <input
                className="w3-input w3-border"
                type="Number"
                value={inputs.workingHours}
                onChange={(e) =>
                  setInputs({ ...inputs, workingHours: e.target.value })
                }
              ></input>
            </p>
            <p>
              <label>Battery Charging Time</label>
              <input
                className="w3-input w3-border"
                type="Number"
                value={inputs.chargingTime}
                onChange={(e) =>
                  setInputs({ ...inputs, chargingTime: e.target.value })
                }
              ></input>
            </p>
            <p>
              <label>Start Range</label>
              <input
                className="w3-input w3-border"
                type="Number"
                value={inputs.StartingRange}
                onChange={(e) =>
                  setInputs({ ...inputs, StartingRange: e.target.value })
                }
              ></input>
            </p>
          </div>
          <div className="w3-col m6">
            <p>
              <label>End Range</label>
              <input
                className="w3-input w3-border"
                type="Number"
                value={inputs.EndingRange}
                onChange={(e) =>
                  setInputs({ ...inputs, EndingRange: e.target.value })
                }
              ></input>
            </p>
            <p>
              <label>Min Range</label>
              <input
                className="w3-input w3-border"
                type="Number"
                value={inputs.MinRange}
                onChange={(e) =>
                  setInputs({ ...inputs, MinRange: e.target.value })
                }
              ></input>
            </p>
            <p>
              <label>Min Battery Depletion Rate</label>
              <input
                className="w3-input w3-border"
                type="Number"
                value={inputs.MinDepletionRate}
                onChange={(e) =>
                  setInputs({ ...inputs, MinDepletionRate: e.target.value })
                }
              ></input>
            </p>
            <p>
              <label>Max Battery Depletion Rate</label>
              <input
                className="w3-input w3-border"
                type="Number"
                value={inputs.MaxDepletionRate}
                onChange={(e) =>
                  setInputs({ ...inputs, MaxDepletionRate: e.target.value })
                }
              ></input>
            </p>
            <p>
              <label>Max Battery Range</label>
              <input
                className="w3-input w3-border"
                type="Number"
                value={inputs.MaxRange}
                onChange={(e) =>
                  setInputs({ ...inputs, MaxRange: e.target.value })
                }
              ></input>
            </p>
          </div>
        </div>

        <div className="w3-center w3-margin-bottom w3-margin-top">
          <button
            className="w3-button w3-round w3-ripple w3-blue w3-margin-right"
            onClick={() => SubmitForm()}
          >
            Submit
          </button>
          <button
            className="w3-button w3-round w3-ripple w3-red w3-margin-left"
            onClick={() => {
              setInputs(initState);
              setFColor("w3-blue");
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

const SimForm2 = ({ calculateSim }) => {
  const intDays = useSelector((store) => store.days);
  const [days, setDays] = useState(intDays);
  const dispatch = useDispatch();

  async function submitForm() {
    setDays(parseInt(days));
    if (days == null || days <= 0) {
      toast.error("Days Value Not Acceptable");
      return;
    }
    toast.dismiss();
    toast.info("Calculating The Values", { autoClose: false });
    dispatch(actSetDays(days));
    calculateSim(days);
  }

  return (
    <div className="w3-card-4 w3-round">
      <h3 className="w3-blue w3-center thickText w3-padding">
        Select Number Of Days To Run Sim
      </h3>
      <div className="w3-container">
        <p>
          <label>Number Of Days</label>
          <input
            className="w3-input w3-border"
            type="Number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          ></input>
        </p>

        <div className="w3-center w3-margin-bottom w3-margin-top">
          <button
            className="w3-button w3-round w3-ripple w3-blue"
            onClick={() => submitForm()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export { SimForm1, SimForm2 };
