import React, { useContext, useState } from "react";

import "./Calendar.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { ThemeContext } from "../App";
import Labels from "./Labels";
import Form from "./Form";

const CalendarPage = () => {
  const [date, setDate] = useState(null);
  const [speciality, setSpeciality] = useState();
  const theme = useContext(ThemeContext)

  const submitForm = async (e) => {
    e.preventDefault();
  };

  const actualDate = new Date();

  return (
    <div className={theme.dark ? "calendarpage-container dark" : "calendarpage-container"}>
        <div className="calendar-container">
        <Calendar
        className={theme.dark ? "calendar dark" : "calendar"}
        onChange={setDate}
        value={date}
      />
      <Labels theme={theme}/>
        </div>
      <Form submitForm={submitForm} date={date} setDate={setDate} setSpeciality={setSpeciality} actualDate={actualDate} />

    </div>
  );
};

export default CalendarPage;
