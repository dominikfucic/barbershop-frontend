import { format, getMonth } from "date-fns";
import React from "react";
import { AppointmentContext } from "./Appointment/AppointmentProvider";

function TimePicker() {
  const appointmentContext = React.useContext(AppointmentContext)!;
  const { setAppointment, appointment } = appointmentContext;

  const [showMenu, setShowMenu] = React.useState(false);
  const [timeSlots, setTimeSlots] = React.useState<Date[]>([]);

  function handleShow() {
    let dates = [] as Date[];
    for (let i = 0; i < 9; i++) {
      let date = appointment!.startDateTime!;
      date.setHours(i + 8, 0, 0);

      dates.push(date);
    }
    setTimeSlots(dates);
    setShowMenu(!showMenu);
  }

  function handleSelect(time: Date) {
    setAppointment((state) => {
      let newDate = new Date(
        time.getFullYear(),
        time.getMonth(),
        time.getDate(),
        time.getHours(),
        time.getMinutes() + appointment!.service!.duration
      );
      return {
        ...state,
        startDateTime: time,
        endDateTime: newDate,
      };
    });
    setShowMenu(!showMenu);
  }

  if(!appointment?.startDateTime) return null;

  return (
    <div className="flex items-center">
      {appointment?.endDateTime && appointment?.startDateTime ? (
        <div>Selected time: {format(appointment.startDateTime, "HH:mm")}</div>
      ) : null}
      <div className="w-[40%] ml-auto">
        <div
          className='h-10 bg-slate-200 after:block leading-10 pl-3 after:content[""] after:h-3 after:w-3 after:border-slate-500 after:border-l-4 after:border-b-4 after:-rotate-45 relative after:absolute after:right-4 after:top-3 cursor-pointer'
          onClick={handleShow}
        >
          Pick a time:
        </div>
        {showMenu && (
          <ul className="bg-slate-50 text-center">
            {timeSlots.map((time) => (
              <li
                key={time.toString()}
                className="pr-2 py-1 hover:bg-slate-100 cursor-pointer border-b border-bg-slate-100"
                onClick={() => handleSelect(time)}
              >
                {format(time, "HH:mm")}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TimePicker;
