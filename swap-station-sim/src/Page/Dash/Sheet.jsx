import { useSelector } from "react-redux";

import { StartingRangeDistrubution } from "./../../Components/Charts";
import { bikeChartVals, simulation } from "./../../Function/Calc";
import { Sheet1Bar } from "./../../Components/Bars";
import { bulkDelete, bulkAdd } from "./../../Function/sheets";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sheet1Page = () => {
  let vals = useSelector((store) => store.sheet1Data);
  let data = bikeChartVals(vals);
  let simVals = useSelector((store) => store.simForm);
  let range = useSelector((store) => store.sheet1Data);
  let sheet2 = useSelector((store) => store.sheets.sheet2);

  async function calcFunc() {
    toast.info("Simulation Loading ....", { autoClose: false });

    let sim = simulation(simVals, range);
    //console.log(sim);
    let del = await bulkDelete("bike", sheet2);
    console.log(del);
    let res = await bulkAdd(sheet2, sim);
    console.log(res);
    toast.dismiss();
    if (del.status === false || res.status === false) {
      toast.error("Failed To Simulate", { autoClose: 2000 });
    }
    toast.success("Simulation Success");
  }
  return (
    <div>
      <Sheet1Bar calcFunc={calcFunc} />
      <div className="w3-margin-top w3-margin-bottom w3-card-4 w3-padding">
        <h2 className="w3-center">Starting Range Distribution</h2>
        <div>
          <StartingRangeDistrubution xaxis={data.xAxis} yaxis={data.yAxis} />
        </div>
      </div>
    </div>
  );
};

export { Sheet1Page };
