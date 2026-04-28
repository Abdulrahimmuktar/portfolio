import { useQuery } from "@tanstack/react-query"

export function useWeatherByLocation(location){

    const {isLoading, data:weather, error} = useQuery({
        queryKey: ["weather", location],
        queryFn:()=> fetchweatherbylocation(location)
    })

    return {isLoading,weather,error}
}



async function fetchweatherbylocation(location){

    if(location.length < 2){
        return
    }

    

     const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=7d89a7e7886f447e9fa101621260903&q=${location}&days=7&aqi=no&alerts=no`)

    const data = await response.json()


    return data



}