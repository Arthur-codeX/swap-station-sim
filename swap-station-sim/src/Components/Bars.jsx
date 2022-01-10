import {
  BsFillFileEarmarkSpreadsheetFill,
  BsFillCalculatorFill,
  BsFillBarChartLineFill,
  BsBackspace,
  BsTable,
} from "react-icons/bs";

import { FcDataSheet } from "react-icons/fc";

import { useDispatch, useSelector } from "react-redux";
import { actSwitchPage, setSheet1Data } from "./../redux/action";
import { getAllRows } from "./../Function/sheets";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SimBar = () => {
  let dispatch = useDispatch();
  let url = useSelector((store) => store.sheets.sheet1);

  async function calculate() {
    console.log("Calculate");
    toast.info("... Loading", { autoClose: false });
    let res = await getAllRows(url);
    toast.dismiss();
    if (res.status !== true) {
      toast.error("Failed to Calculate");
      return;
    }
    toast.success("Calculated");
    dispatch(
      setSheet1Data(res.meta, {
        bikes: 200,
        swapStation: 12,
        workingHours: 10,
        StartingRange: 15,
        EndingRange: 40,
        MinRange: 5,
        MinDepletionRate: 0,
        MaxDepletionRate: 20,
        MaxRange: 40,
        chargingTime: 3,
      })
    );
  }

  return (
    <div className="w3-bar w3-margin-top" style={{ width: "100%" }}>
      <a
        style={{ marginRight: "10%" }}
        className="w3-bar-item w3-button w3-ripple w3-xlarge w3-text-blue w3-margin-left w3-marrgin-right w3-right"
        href="https://docs.google.com/spreadsheets/d/12_f0aHnMFKfbcHR_8u2N3xDt-ptfP6gkK1viNAVzhIo/edit#gid=0"
        target="_blank"
      >
        <BsFillFileEarmarkSpreadsheetFill />
      </a>
      <a className="w3-bar-item w3-ripple w3-xlarge w3-button w3-text-blue w3-margin-left w3-marrgin-right w3-right">
        <FcDataSheet />
      </a>

      <a
        onClick={() => dispatch(actSwitchPage("Sheet1Page"))}
        className="w3-bar-item w3-ripple w3-xlarge w3-button w3-text-blue w3-margin-left w3-marrgin-right w3-right"
      >
        <BsFillBarChartLineFill />
      </a>
    </div>
  );
};

const Sheet1Bar = ({ calcFunc }) => {
  return (
    <div className="w3-bar w3-margin-top" style={{ width: "100%" }}>
      <button className="w3-bar-item w3-ripple w3-xlarge w3-button w3-text-blue w3-margin-left w3-margin-right">
        <BsBackspace />
      </button>
      <button className="w3-bar-item w3-ripple w3-xlarge w3-button w3-text-blue w3-margin-left w3-margin-right">
        <BsFillCalculatorFill onClick={() => calcFunc()} />
      </button>
      <button className="w3-bar-item w3-ripple w3-xlarge w3-button w3-text-blue w3-margin-left w3-margin-right">
        <BsFillFileEarmarkSpreadsheetFill />
      </button>
    </div>
  );
};

const Sim2Bar = () => {
  const dispatch = useDispatch();
  const daysSim = useSelector((store) => store.daysSim);

  function goToTable() {
    if (daysSim === false) {
      toast.dismiss();
      toast.error("Submit Form To Run Simulation");
      return;
    }
    dispatch(actSwitchPage("Sim2Table"));
  }

  return (
    <div className="w3-bar w3-margin-top w3-margin-bottom">
      <button className="w3-bar-item w3-ripple w3-xlarge w3-button w3-text-blue w3-margin-left w3-margin-right">
        <BsFillFileEarmarkSpreadsheetFill />
      </button>
      <button
        onClick={() => goToTable()}
        className="w3-bar-item w3-ripple w3-xlarge w3-button w3-text-blue w3-margin-left w3-margin-right"
      >
        <BsTable />
      </button>
    </div>
  );
};

export { SimBar, Sheet1Bar, Sim2Bar };
