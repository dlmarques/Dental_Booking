import React from 'react'
import {GoPrimitiveDot} from "react-icons/go"

const Labels = ({theme}) => {
  return (
    <>
       <div className={theme.dark ? "labels dark" : "labels"}>
        <div className="color-label"> <GoPrimitiveDot id="today"/> Today </div>
        <div className="color-label"> <GoPrimitiveDot id="selected"/> Selected Day </div>
        <div className="color-label"> <GoPrimitiveDot id="dentistday"/> Dentist Day </div>
        <div className="color-label"> <GoPrimitiveDot id="nutritionday"/> Nutrition Day </div>
      </div>
    </>
  )
}

export default Labels