import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../shared/ui/Input/Input";
import Button from "../shared/ui/Button/Button";
import weatherRequest from "../shared/api/api";
import './MainPage.css'


const MainPage = () => {
    const [cityName, setCity] = useState(""); 
    const button = () => { setCity("") }

    const handleClick = async () => {
        const cityName = (await weatherRequest.cityReq);
    }

    return (
        <div className="App">
            <div className="InputStyle">
                <Input state={cityName} setState={setCity}/>
            </div>

            {/* <div className="ButtonStyle">
                <Button type="submit" handleClick={button}>Посмотреть погоду</Button>
            </div> */}

            <div className="ButtonStyle">
                <Button type="submit" handleClick={handleClick}>Посмотреть погоду</Button>
            </div>

        </div>
    )
}

export default MainPage