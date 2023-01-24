import React from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export const AppointmentContext =
  React.createContext<AppointmentContext | null>(null);

const { Provider } = AppointmentContext;

function AppointmentProvider({ children }: { children: React.ReactNode }) {
  const currentDate = new Date(Date.now());
  const endDate = new Date(Date.now() + 45 * 60 * 1000);

  const initialState = {
    service: {
      id: 1,
      name: "Haircut",
      desc: "Lorem ipsum",
      price: 30,
      duration: 45,
    },
    barber: {
      id: 1,
      firstName: "Test",
      lastName: "Barber",
    },
    startDateTime: currentDate,
    endDateTime: endDate,
  };

  const [appointment, setAppointment] = React.useState<Appointment | null>(
     null
  );
  return (
    <Provider value={{ appointment, setAppointment }}>{children}</Provider>
  );
}

export const useAuth = () => {
  const authContext = React.useContext(AuthContext)!;
  return authContext;
};

export default AppointmentProvider;
