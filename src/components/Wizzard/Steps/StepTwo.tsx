import React from "react";
import Barber from "../../Barber";
import { WizzardContext } from "../Wizzard";
import Step from "./Step";

function StepTwo() {
  const { currentStep, barbers } = React.useContext(WizzardContext)!;

  if (currentStep !== 2) return null;

  return (
    <Step title="Choose a barber">
      {barbers.map((barber) => (
        <Barber key={barber.id} barber={barber} />
      ))}
    </Step>
  );
}

export default StepTwo;
