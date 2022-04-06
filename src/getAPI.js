import {CityContext} from "./index";
import {useContext} from "react";

const GetAPI = () => {
    const {city} = useContext(CityContext)
        fetch('https://api.weatherapi.com/v1/forecast.json?key=c075ec7b568241f992c91841222803&q=' +
            `${city.name}` +
            '&days=3&lang=ru&aqi=no&alerts=no')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                if (city.maxTemp.length !== 0) {
                    city.setMinTemp([])
                    city.setMaxTemp([])
                    city.setWind([])
                    city.setHumidity([])
                    city.setText([])
                    city.setDate([])
                }
                for (let days of data.forecast.forecastday) {
                    city.minTemp.push(days.day.mintemp_c)
                    city.maxTemp.push(days.day.maxtemp_c)
                    city.wind.push(days.day.maxwind_kph)
                    city.humidity.push(days.day.avghumidity)
                    city.text.push(days.day.condition.text)
                    city.date.push(days.date)
                }
            })
};

export default GetAPI;