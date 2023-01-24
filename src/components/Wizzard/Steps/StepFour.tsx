import React from "react";
import Appointment from "../../Appointment/Appointment";
import { AppointmentContext } from "../../Appointment/AppointmentProvider";
import { WizzardContext } from "../Wizzard";
import Step from "./Step";

function StepFour() {
  const { currentStep } = React.useContext(WizzardContext)!;
  const { appointment } = React.useContext(AppointmentContext)!;

  if (currentStep !== 4) return null;

  return (
    <Step title="Confirmation">
      <Appointment data={appointment!} />
    </Step>
  );
}

export default StepFour;
