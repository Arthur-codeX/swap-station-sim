import { useSelector } from "react-redux";

import About from "./Dash/About";
import Simulation from "./Dash/sim";
import Sim2 from "./Dash/Sim2";
import Sim2Table from "./Dash/Sim2Table";

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

  if (page === "Sim2") {
    return <Sim2 />;
  }

  if (page === "Sim2Table") {
    return <Sim2Table />;
  }

  return null;
};

export default Switch;
