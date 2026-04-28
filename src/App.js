// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import Weather from './Components/Weather';
// import { useWeather } from './hooks/useWeather';
import Input from './Components/Input';
import { useWeatherByLocation } from './hooks/useWeatherByLocation';
import Loader from './Components/Loader';
import { useState } from 'react';

// function App() {
//   const [location,SetLocation] = useState()
//   const[isloading,SetIsloading] = useState(false )
//   const [weather,SetWeather] = useState(null)
//   useEffect(()=>{
//     async function fetchWeatherData(){
//       const response = await fetch("http://api.weatherapi.com/v1/current.json?key=7d89a7e7886f447e9fa101621260903&q=Nairobi&aqi=no")

//       const data = await response.json()
//       console.log(data);
//       SetWeather(data)

//     }
//     fetchWeatherData()
//   },[])
//   return (
//     <div className="App">
//        <h4>{weather?.current.condition.text}</h4>
//       <h2>{weather?.location.name}, {weather?.location.country}</h2>

//       <div className="data">

//       <div className='number'>
//         <h1>{weather?.current.temp_c}<sup style={{fontSize: "18px"}}>0<sup style={{fontSize: "20px"}}>C</sup></sup></h1>

//       </div>
// {/* <hr /> */}
//       <div className='words'>
//         <p>{weather?.current.feelslike_c}<sup style={{fontSize: "9px"}}>0</sup><sup style={{fontSize: "12px"}}>C</sup></p>
//         <p>{weather?.current.wind_mph}MPH</p>
//         <p>{weather?.current.humidity}Humidity</p>


//       </div>
//       </div>

//     </div>
//   );
// }



function App() {
  
  // const [weather, setWeather] = useState(null)
  // useEffect(() => {
  //   async function fetchWeather() {
  //     const response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=7d89a7e7886f447e9fa101621260903&q=Nairobi&days=7&aqi=no&alerts=no")
  //     const data = await response.json()

  //     // console.log(data);


  //     setWeather(data)
  //   }
  //   fetchWeather()
  // }, [])

  const [location,setLocation] = useState("")
  const{isLoading, weather,} = useWeatherByLocation(location)


  function handleChangeLocation(loc){
// setTimeout(() => {
  setLocation(loc)
// }, 2500);

  }
  return (
    <div className='app'>
      <div className='main'>

        <h1>Classy Weather</h1>
          <Input onChangeLocation={handleChangeLocation} location={location}/>
        { !isLoading ? <Weather  location={`${weather?.location?.name}, ${weather?.location?.country}`} days={weather?.forecast?.forecastday} /> : <Loader/>}
      </div>
    </div>
  )
}


export default App;
