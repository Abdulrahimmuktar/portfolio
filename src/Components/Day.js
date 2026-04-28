import React from 'react'

function Day({day}) {
  // console.log(day);
  
  return (
    <div>
        <li className='siku'>
          <img src={day?.day?.condition?.icon}/>
        <p>{formatDay(day?.date)}</p>
        <p style={{fontSize: "15px"}}>{day?.day?.mintemp_c}<sup>0</sup> - {day?.day?.maxtemp_c}<sup>0</sup></p>
    </li>
      
    </div>
  )
}

function formatDay(dateStr){
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr))
}

export default Day
