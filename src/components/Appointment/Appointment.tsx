import { format } from "date-fns";
import React from "react";
import { Table } from "./Appointment.styled";

function Appointment({ data }: { data: Appointment }) {
  const { barber, service, startDateTime, endDateTime } = data;
  return (
    <>
      {/* <h1>Your Appointment</h1> */}
      <Table>
        <tbody>
          <tr>
            <th>Barber</th>
            <td>{barber?.firstName}</td>
          </tr>
          <tr>
            <th>Service</th>
            <td>{service?.name}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{service?.description}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>{service?.price} €</td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>{service?.duration} min</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>{startDateTime && format(startDateTime, "dd-MM-yyyy")}</td>
          </tr>
          <tr>
            <th>Start time</th>
            <td>{startDateTime && format(startDateTime, "HH:mm")}</td>
          </tr>
          <tr>
            <th>End time</th>
            <td>{endDateTime && format(endDateTime, "HH:mm")}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Appointment;
