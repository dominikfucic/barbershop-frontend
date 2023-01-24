import React from "react";
import { AppointmentContext } from "./Appointment/AppointmentProvider";

function Service({ service }: { service: Service }) {
  const appointmentContext = React.useContext(AppointmentContext)!;
  const { appointment, setAppointment } = appointmentContext;

  return (
    <div
      className={`flex ${
        appointment?.service === service ? "bg-slate-300" : "bg-slate-200"
      } justify-between p-3 rounded h-36 hover:bg-slate-300 hover:cursor-pointer`}
      onClick={() =>  
        setAppointment((state) => {
          return {
            ...state,
            service: service,
          };
        })
      }
    >
      <div className="text-lg pr-3 overflow-hidden">
        <h2 className="text-xl font-medium mb-2">{service.name}</h2>
        <p>{service.desc}</p>
      </div>
      <div className="flex flex-col justify-evenly items-end font-bold whitespace-nowrap">
        <div>€ {service.price}</div>
        <div>{service.duration} min</div>
      </div>
    </div>
  );
}

export default Service;
