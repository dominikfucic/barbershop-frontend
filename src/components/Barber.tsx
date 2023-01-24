import React from "react";
import { AppointmentContext } from "./Appointment/AppointmentProvider";

function Barber({ barber }: { barber: Barber }) {
  const appointmentContext = React.useContext(AppointmentContext)!;
  const { appointment, setAppointment } = appointmentContext;

  return (
    <div
      className={`h-18 ${
        appointment!.barber === barber ? "bg-slate-300" : "bg-slate-200"
      } rounded flex items-center p-4`}
      onClick={() => {
        setAppointment((state) => {
          return {
            ...state,
            barber: barber,
          };
        });
      }}
    >
      <h1 className="text-xl">
        {barber.firstName} {barber.lastName}
      </h1>
    </div>
  );
}
export default Barber;
