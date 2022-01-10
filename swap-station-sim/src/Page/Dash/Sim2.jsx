import { Sim2Bar } from "./../../Components/Bars";
import { SimForm2 } from "./../../Components/forms";
import { useSelector, useDispatch } from "react-redux";
import { daysCalculations } from "./../../Function/Calc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bulkDelete, bulkAdd } from "./../../Function/sheets";
import { actDailySim } from "./../../redux/action";

const Sim2 = () => {
  let inputs = useSelector((store) => store.simForm);
  let ranges = useSelector((store) => store.sheet1Data);
  const dispatch = useDispatch();

  async function calculateSim(days) {
    if (ranges.length === 0) {
      toast.dismiss();
      toast.error("Carry Out The First Simulation");
      return;
    }
    let arr = daysCalculations(days, inputs, ranges);
    dispatch(actDailySim(arr));
    toast.dismiss();
    toast.success("Simulation Success");
  }

  return (
    <div className="w3-container">
      <Sim2Bar />
      <div style={{ margin: "auto", width: "50%" }} className="w3-marginTop">
        <div className="w3-container">
          <SimForm2 calculateSim={calculateSim} />
        </div>
      </div>
    </div>
  );
};

export default Sim2;
