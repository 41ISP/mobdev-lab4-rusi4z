import { useEffect, useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import Input, { IInputProps } from "../shared/ui/Input/Input";
import Button from "../shared/ui/Button/Button";
import weatherRequest from "../shared/api/api";
import './MainPage.css'
import { IWeatherRDO } from "../entities/forecast/forecast.model";

const MainPage = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState<IWeatherRDO | undefined>(undefined);

    const onClick = async () => {
        const cityNameWeather = await weatherRequest.cityReq(city)

        setWeatherData(cityNameWeather);
        console.log(cityNameWeather);
    }

    return (
        <div className="App">
            {weatherData && (
                <div className="backgroundMainPage">
                    <p className="p1">{weatherData.main.temp}</p>
                </div>
            )}

            <div className="Entities">
                <div className="InputStyle">
                    <Input cityName={city} setState={setCity}/>
                </div>

                <div className="ButtonStyle">
                    <Button type="submit" handleClick={onClick}>Посмотреть погоду</Button>
                </div>
            </div>

        </div>
    )
}

export default MainPage