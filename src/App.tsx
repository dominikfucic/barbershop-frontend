import React from "react";
import { Navigate } from "react-router-dom";
import "./App.css";
import { AppointmentContext } from "./components/Appointment/AppointmentProvider";
import { AuthContext } from "./components/AuthProvider/AuthProvider";
import Home from "./routes/Home";

function App() {
  const { user } = React.useContext(AuthContext)!;
  const { appointment } = React.useContext(AppointmentContext)!;

  if (!user) return <Navigate to="/login" replace />;

  if (!appointment?.valid) return <Navigate to="/new/appointment" replace />;

  return <Home />;
}

export default App;
