import axios from "axios";
import { ITemperature, Temperature } from "../temperature/temperature";
// import { ICityRDO } from "../city/city";
import Input from "../ui/Input/Input";
import { ICityRDO } from "../ui/Input/Input";

const axiosWeatherInstance = axios.create({
    baseURL: "https://api.openweathermap.org"
})

const weatherRequest = {
    weatherReq: async(cityName: ICityRDO) =>{
            const response = await axiosWeatherInstance.get<ITemperature[]>("locations/v1/cities/search", {
                withCredentials: false,
                params:{
                    apikey: "2cbbc3d76457890139f4fd384cf18565" ,
                    q: cityName
                }
            })
            return response.data
        },
        cityReq: async(cityName: ICityRDO) =>{
            const response = await axiosWeatherInstance.get<ICityRDO[]>(`data/2.5/forecast?q=${cityName}&lang=ru&units=metric&appid=5fd59655896311dc6b576f585c3dfaf6`,{
                withCredentials: false,
                params:{
                    apikey: "2cbbc3d76457890139f4fd384cf18565",
                    metric: true,
                    q: cityName
                }
            })
            return response.data
        }
        
    }


export default weatherRequest