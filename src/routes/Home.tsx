import React from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import Appointment from "../components/Appointment/Appointment";
import { AppointmentContext } from "../components/Appointment/AppointmentProvider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function Home() {
  const { appointment } = React.useContext(AppointmentContext)!;

  if(!appointment) return <Navigate to="new/appointment" replace/>

  return (
    <Wrapper>
      <Appointment data={appointment!} />;
    </Wrapper>
  );
}

export default Home;
