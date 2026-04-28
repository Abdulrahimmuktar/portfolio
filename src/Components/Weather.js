import React from 'react'
import Day from './Day'

function Weather({location, days}) {
  return (
    <div className='weather'>
      
         <h2>Weather {location}</h2>
        <ul className='days'>
          {days?.map((day)=>(
          <Day key={day?.date} day={day}/>
          ))}
        </ul>
      
    </div>
  )
}

export default Weather
