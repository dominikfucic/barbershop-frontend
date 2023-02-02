import axios from "axios";
import React from "react";
import Barber from "../../Barber";
import { WizzardContext } from "../Wizzard";
import Step from "./Step";

function StepTwo() {
  const { currentStep } = React.useContext(WizzardContext)!;

  const [barbers, setBarbers] = React.useState<Barber[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get("http://localhost:8000/api/barbers").then((res) => {
      setBarbers(res.data.barbers);
      setLoading(false);
    });
  }, []);

  if (currentStep !== 2) return null;

  return (
    <Step title="Choose a barber">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        barbers.map((barber) => <Barber key={barber.id} barber={barber} />)
      )}
    </Step>
  );
}

export default StepTwo;
