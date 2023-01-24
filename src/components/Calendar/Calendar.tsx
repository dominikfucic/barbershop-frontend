import { format, isBefore, isEqual } from "date-fns";
import React from "react";
import styled from "styled-components";
import { AppointmentContext } from "../Appointment/AppointmentProvider";
import { CalendarButton } from "../Button.styled";
import { WizzardContext } from "../Wizzard/Wizzard";

const Table = styled.table`
  width: 100%;
  border: 1px solid #ccc;
  border-collapse: collapse;
`;

const Day = styled.td<DayProps>`
  width: 14.28%;
  height: 30px;
  border: 1px solid #ccc;
  border-collapse: collapse;
  padding: 8px;
  text-align: center;
  color: ${({ active }) => (active ? "red" : "#000")};
  font-weight: ${({ active }) => (active ? "700" : "400")};
  background-color: ${({ selected }) => (selected ? "#ddd" : "#fff")};
  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
  @media (min-width: 375px) {
    height: 40px;
  }
`;

const EmptyDay = styled(Day)`
  background-color: #eee;
  &:hover {
    background-color: #eee;
    cursor: default;
  }
`;

const Header = styled.th`
  width: 14.28%;
  height: 30px;
  border: 1px solid #ccc;
  border-collapse: collapse;
  padding: 8px;
  @media (min-width: 375px) {
    height: 40px;
  }
`;

function Calendar() {
  const { wizzardState, setWizzardState } = React.useContext(WizzardContext)!;
  const { currentDate } = wizzardState;

  const { setAppointment, appointment } = React.useContext(AppointmentContext)!;

  const renderCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const mondayFirst = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;

    let day = 1;

    const calendar = [];
    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < mondayFirst - 1) {
          row.push(<EmptyDay key={j}></EmptyDay>);
        } else if (day > daysInMonth) {
          row.push(<EmptyDay key={j}></EmptyDay>);
        } else {
          let date = new Date(year, month, day);
          let selectedDate = appointment?.startDateTime;
          row.push(
            <Day
              key={j}
              onClick={() => {
                setAppointment((state) => {
                  return {
                    ...state,
                    startDateTime: date,
                  };
                });
              }}
              active={isEqual(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  currentDate.getDate()
                ),
                date
              )}
              selected={isEqual(selectedDate!, date)}
            >
              {day}
            </Day>
          );
          day++;
        }
      }
      calendar.push(<tr key={i}>{row}</tr>);
    }

    return (
      <Table>
        <thead>
          <tr className="bg-slate-300">
            <Header>Mon</Header>
            <Header>Tue</Header>
            <Header>Wed</Header>
            <Header>Thu</Header>
            <Header>Fri</Header>
            <Header>Sat</Header>
            <Header>Sun</Header>
          </tr>
        </thead>
        <tbody>{calendar}</tbody>
      </Table>
    );
  };

  const prevMonth = () => {
    setWizzardState((state) => {
      if (state.currentDate.getMonth() - 1 === new Date().getMonth()) {
        return {
          ...state,
          currentDate: new Date(),
        };
      }

      return {
        ...state,
        currentDate: new Date(
          state.currentDate.getFullYear(),
          state.currentDate.getMonth() - 1
        ),
      };
    });
  };

  const nextMonth = () => {
    setWizzardState((state) => {
      return {
        ...state,
        currentDate: new Date(
          state.currentDate.getFullYear(),
          state.currentDate.getMonth() + 1
        ),
      };
    });
  };

  return (
    <>
      <div className="flex justify-between mb-2 items-center text-lg">
        <CalendarButton
          disabled={isBefore(currentDate, Date.now())}
          onClick={prevMonth}
        >
          {"<"}
        </CalendarButton>
        {format(currentDate, "MMMM yyyy")}
        <CalendarButton onClick={nextMonth}>{">"}</CalendarButton>
      </div>
      {renderCalendar()}
    </>
  );
}

export default Calendar;
