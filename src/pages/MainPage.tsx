import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../shared/ui/Input/Input";
import Button from "../shared/ui/Button/Button";
import weatherRequest from "../shared/api/api";
import './MainPage.css'

const MainPage = () => {
    const [cityName, setCity] = useState(""); 

    const onClick = async () => {
        const cityNameWeather = (await weatherRequest.cityReq);
        console.log(cityNameWeather);
    }

    return (
        <div className="App">
            <div className="InputStyle">
                <Input cityName={cityName} setState={setCity}/>
            </div>

            <div className="ButtonStyle">
                <Button type="submit" handleClick={onClick}>Посмотреть погоду</Button>
            </div>

        </div>
    )
}

export default MainPage