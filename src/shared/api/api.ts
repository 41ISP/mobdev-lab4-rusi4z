import axios from "axios";
import { ITemperature, Temperature } from "../temperature/temperature";
import { ICityRDO } from "../city/city";

const axiosWeatherInstance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/forecast?q=Omsk&lang=ru&units=metric&appid=5fd59655896311dc6b576f585c3dfaf6"
})

const weatherRequest = {
        cityReq: async(cityName: string) =>{
            const response = await axiosWeatherInstance.get<ICityRDO[]>("locations/v1/cities/search", {
                withCredentials: false,
                params:{
                    apikey: "2cbbc3d76457890139f4fd384cf18565" ,
                    q: cityName
                }
            })
            return response.data
        },
        weatherReq: async(cityKey: string) =>{
            const response = await axiosWeatherInstance.get<ITemperature[]>("forecasts/v1/hourly/1hour/"+cityKey,{
                withCredentials: false,
                params:{
                    apikey: "2cbbc3d76457890139f4fd384cf18565",
                    metric: true
                }
            })
            return response.data
        }
        
    }


export default weatherRequest