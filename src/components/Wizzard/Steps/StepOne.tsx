import axios from "axios";
import React, { useEffect } from "react";
import Service from "../../Service";
import { WizzardContext } from "../Wizzard";
import Step from "./Step";

function StepOne() {
  const { currentStep } = React.useContext(WizzardContext)!;

  const [services, setServices] = React.useState<Service[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/services")
      .then((res) => {
        setServices(res.data.services);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (currentStep !== 1) return null;

  return (
    <Step title="Choose a service">
      <div className="flex flex-col gap-2">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          services.map((service) => (
            <Service key={service.id} service={service} />
          ))
        )}
      </div>
    </Step>
  );
}

export default StepOne;
