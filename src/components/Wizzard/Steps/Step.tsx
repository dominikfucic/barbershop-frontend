import React from "react";
import { useNavigate } from "react-router-dom";
import { AppointmentContext } from "../../Appointment/AppointmentProvider";
import { Button } from "../../Button.styled";
import { WizzardContext } from "../Wizzard";

function Step({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { wizzardState, setWizzardState } = React.useContext(WizzardContext)!;
  const { currentStep } = wizzardState;
  const navigate = useNavigate();
  const appointmentContext = React.useContext(AppointmentContext)!;
  const { appointment } = appointmentContext;
  const { barber, service, startDateTime, endDateTime } = appointment ?? {}

  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    if (currentStep === 1 && service) {
      return setDisabled(false);
    }
    if (currentStep === 2 && barber) {
      return setDisabled(false);
    }
    if (currentStep === 3 && startDateTime && endDateTime) {
      return setDisabled(false);
    }
    if (currentStep === 4) {
      return setDisabled(false);
    }
  }, [service, barber, currentStep, startDateTime, endDateTime]);

  function next() {
    if(currentStep === 4) return navigate('/')
    setWizzardState((state) => {
      return {
        ...state,
        currentStep: currentStep + 1,
      };
    });
    setDisabled(true);
  }

  function prev() {
    setWizzardState((state) => {
      return {
        ...state,
        currentStep: currentStep - 1,
      };
    });
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">{title}</h1>
      {children}
      <div className="flex justify-between mt-2">
        <Button disabled={currentStep === 1} onClick={prev}>
          Back
        </Button>
        <Button disabled={disabled} onClick={next}>
          {currentStep === 4 ? "Confirm" : "Next"}
        </Button>
      </div>
    </div>
  );
}

export default Step;
