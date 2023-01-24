import React from "react";
import Service from "../../Service";
import { WizzardContext } from "../Wizzard";
import Step from "./Step";

function StepOne() {
  const { currentStep, services } = React.useContext(WizzardContext)!;

  if (currentStep !== 1) return null;

  return (
    <Step title="Choose a service">
      <div className="flex flex-col gap-2">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </Step>
  );
}

export default StepOne;
