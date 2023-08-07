import { useState, useEffect } from 'react'
import WeatherCards from './WeatherCards'

const Weather = () => {
    const [weather, setWeather] = useState([])
    
    const fetchWeatherData = () => {
        fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/30540?apikey=vIYYTNVXAguWFSdBdnNHxG9k8NHk0wi1")
        .then(response => {
            return response.json()
        })
        .then( data => {
            setWeather(data)
            console.log(weather)
        })
    }
    useEffect(() => {
        fetchWeatherData()
    }, [])
    
    
    return (
        <>
       <WeatherCards weather = {weather}/>
        </>
    )
}

export default  Weather