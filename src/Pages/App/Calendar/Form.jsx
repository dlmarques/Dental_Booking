import React from 'react'
import { format } from "date-fns";

const Form = ({submitForm, date, setDate, setSpeciality, actualDate}) => {
  return (
    <>
          <form action="submit" onSubmit={submitForm}>
       
        <label htmlFor="">Select Date</label>
        <input
          type="date"
          id="date"
          value={date ? format(new Date(date), "yyyy-MM-dd") : format(new Date(actualDate), "yyyy-MM-dd")}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
        <label htmlFor="">Select Specialty</label>
        <select
          name=""
          id="select"
          onChange={(e) => setSpeciality(e.target.value)}
        >
          <option value="Dentist">Dentist</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Etc">etc</option>
        </select>
        <input type="submit" id="submit" />
      </form>
    </>
  )
}

export default Form