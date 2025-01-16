import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../shared/ui/Input/Input";
import Button from "../shared/ui/Button/Button";
import weatherRequest from "../shared/api/api";
import './MainPage.css'


const MainPage = () => {
    const [cityName, setCity] = useState(""); 
    const button = () => { setCity("") }
    return (
        <div className="App">
        <Input state={cityName} setState={setCity}/>
            <Button type="submit" handleClick={button}>Посмотреть погоду</Button>
        </div>
    )
}

export default MainPage