import { SimBar } from "./../../Components/Bars";
import { SimForm1 } from "./../../Components/forms";

const Simulation = () => {
  return (
    <div className="w3-container">
      <SimBar />
      <div style={{ margin: "auto", width: "70%" }} className="w3-marginTop">
        <div className="w3-container">
          <SimForm1 />
        </div>
      </div>
    </div>
  );
};

export default Simulation;
