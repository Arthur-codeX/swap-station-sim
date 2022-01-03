import { useSelector } from "react-redux";

import About from "./Dash/About";
import Simulation from "./Dash/sim";
import { Sheet1Page } from "./Dash/Sheet";

const Switch = () => {
  let page = useSelector((store) => store.page);

  if (page === "About") {
    console.log("About");
    return <About />;
  }

  if (page === "Simulation") {
    return <Simulation />;
  }

  if (page === "Sheet1Page") {
    return <Sheet1Page />;
  }

  return null;
};

export default Switch;
