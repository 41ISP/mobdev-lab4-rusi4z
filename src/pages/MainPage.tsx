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
    
    const inputField = document.getElementById('backgroundMainPage') as HTMLInputElement;
    const RSclearBtn = document.getElementById('clearBtn') as HTMLButtonElement;

    const resetBtn = async () => { 
        await $('#backgroundMainPage').empty();

        RSclearBtn.addEventListener('click', () => {
            inputField.value = '';
        });
    }


    return (
        <div className="App">

            <div className="title">Введите название города</div>

            {weatherData && (
                <div className="backgroundContainer">
                    <p className="p1">Температура в городе: {city} {weatherData.main.temp}</p>
                    <p className="p2">Ощущается как: {weatherData.main.feels_like}</p>
                </div>
            )}
                <div className="Entities">
                    <div className="InputStyle">
                        <Input cityName={city} setState={setCity}/>
                    </div>

                    <div className="ButtonStyle">
                        <Button type="submit" handleClick={onClick}>Посмотреть погоду</Button>
                        <button name="clearBtn" className="clearBtn" type="submit" onClick={resetBtn}>x</button>
                    </div>
                </div>
        </div>
    )
}

export default MainPage