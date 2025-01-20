import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../shared/ui/Input/Input";
import Button from "../shared/ui/Button/Button";
import weatherRequest from "../shared/api/api";
import './MainPage.css'

const MainPage = () => {
    const [city, setCity] = useState(""); 

    const onClick = async () => {
        const cityNameWeather = await weatherRequest.cityReq(city)

        console.log(cityNameWeather);
    }

    return (
        <div className="App">

            <div className="backgroundMainPage">
                <p className="p1">{city}</p>
            </div>

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