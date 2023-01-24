import React from "react";
import Calendar from "../../Calendar/Calendar";
import TimePicker from "../../TimePicker";
import { WizzardContext } from "../Wizzard";

import Step from "./Step";

function StepThree() {
  const { currentStep } = React.useContext(WizzardContext)!;

  if (currentStep !== 3) return null;
  
  return (
    <Step title="Choose a date and time">
      <Calendar />
      <TimePicker />
    </Step>
  );
}

export default StepThree;
