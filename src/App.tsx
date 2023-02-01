import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { AppointmentContext } from "./components/Appointment/AppointmentProvider";
import { AuthContext } from "./components/AuthProvider/AuthProvider";
import Home from "./routes/Home";

const Navbar = styled.div`
  height: 50px;
  width: 100%;
  background-color: #ccc;
`;

function App() {
  const { user } = React.useContext(AuthContext)!;

  if (!user) return <Navigate to="/login" replace />;

  return (
    <>
      <Navbar>{user.firstName! + " " + user.lastName!}</Navbar>
      <Outlet />
    </>
  );
}

export default App;
