import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../shared/ui/Input/Input";
import Button from "../shared/ui/Button/Button";

const MainPage = () => {
    const [city, setCity] = useState(""); 
    const button = () => { setCity() }
    return (
        <div className="App">
            {/* <Input ></Input> */}
            <Button handleClick={button}></Button>
        </div>
    )
}

export default MainPage