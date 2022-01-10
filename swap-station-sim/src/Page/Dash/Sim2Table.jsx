import { useSelector } from "react-redux";
import { Sim2TableData } from "./../../Components/table";

const Sim2Table = () => {
  let inputs = useSelector((store) => store.simForm);
  let data = useSelector((store) => store.sim3Result);
  let days = useSelector((store) => store.days);

  console.log(days);

  return (
    <div style={{ width: "100%" }}>
      <div className="w3-margin-top" style={{ width: "100%" }}>
        <h2 className="w3-margin-top w3-margin-bottom w3-center">
          <b>Per Day Simulation</b>
        </h2>
        <div style={{ width: "80%", margin: "auto" }}>
          <div className="w3-row-padding w3-card-4 w3-padding">
            <h3 className="w3-center thickText">Set Values</h3>
            <div className="w3-col m6">
              <ul className="w3-ul">
                <li>Sim 2</li>
                <li>
                  Bikes: <b>{inputs.bikes}</b>
                </li>
                <li>
                  Swap Station Batteries: <b>{inputs.swapStation}</b>
                </li>
                <li>
                  Working Hours; <b>{inputs.workingHours}</b>
                </li>
                <li>
                  Min Starting Range: <b>{inputs.StartingRange}</b>
                </li>
                <li>
                  Max Starting Range: <b>{inputs.EndingRange}</b>
                </li>
              </ul>
            </div>
            <div className="w3-col m6">
              <ul className="w3-ul">
                <li>
                  No Of Days: <b>{days}</b>
                </li>
                <li>
                  Min Range: <b>{inputs.MinRange}</b>
                </li>
                <li>
                  Min Depletion Rate <b>{inputs.MinDepletionRate}</b>
                </li>
                <li>
                  Max Depletion Rate <b>{inputs.MaxDepletionRate}</b>
                </li>
                <li>
                  Max Range <b>{inputs.MaxRange}</b>
                </li>
                <li>
                  ChargingTime: <b>{inputs.chargingTime}</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w3-container w3-margin-top">
        <div className="w3-table w3-table-all table-layout-fix">
          <tr className="w3-blue">
            <th>Day</th>
            <th>Hour</th>
            <th>Starting Range</th>
            <th>Depletion</th>
            <th>Bike Range</th>
            <th>Swap</th>
            <th>Batt</th>
            <th>Charging</th>
            <th>Finished</th>
          </tr>
          {data.map((doc, index) => {
            return <Sim2TableData key={index} doc={doc} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sim2Table;
