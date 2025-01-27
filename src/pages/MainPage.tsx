import { SetStateAction, useEffect, useState } from "react";
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
    
    const resetBtn = async () => { 
        setWeatherData(undefined);
    }

    return (
        <div className="App">
            <div className="title">Введите название города</div>
            {weatherData && ( 
                <div className="backgroundContainer">
                    <p className="p1">Температура в городе: {weatherData.name} {weatherData.main.temp}</p>
                    <p className="p2">Ощущается как {weatherData.main.feels_like}</p>
                    <p className="p3">Ветер: {weatherData.wind.speed} м/c.</p>
                </div>
            )}

                <div className="Entities">
                    <div className="InputStyle">
                        <Input cityName={city} setState={setCity}/>
                    </div>

                    <div className="ButtonStyle">
                        <Button type="submit" handleClick={onClick}>Посмотреть погоду</Button>
                        <button className="clearBtn" type="button" onClick={resetBtn}>x</button>
                    </div>
                </div>
        </div>
    )
}

export default MainPage