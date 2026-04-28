import { useQuery } from "@tanstack/react-query"


export function useWeather(){

    const {isLoading, data:weather, error} = useQuery({
        queryKey: ["weather"],
        queryFn: fetchweather
    })

    return {isLoading, weather,error}
}





async function fetchweather(){
    const response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=7d89a7e7886f447e9fa101621260903&q=Nairobi&days=7&aqi=no&alerts=no")

    const data = await response.json()


    return data





    
    

}
    
