import React from "react";
import { Navigate } from "react-router-dom";
import { AppointmentContext } from "../components/Appointment/AppointmentProvider";
import StepFour from "../components/Wizzard/Steps/StepFour";
import StepOne from "../components/Wizzard/Steps/StepOne";
import StepThree from "../components/Wizzard/Steps/StepThree";
import StepTwo from "../components/Wizzard/Steps/StepTwo";
import Wizzard from "../components/Wizzard/Wizzard";

function NewAppointment() {
  const { appointment } = React.useContext(AppointmentContext)!;

  if (appointment?.valid) {
    return <Navigate to="/" replace />;
  }

  return (
    <Wizzard>
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
    </Wizzard>
  );
}

export default NewAppointment;
