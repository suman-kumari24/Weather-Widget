import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({        
        city: "Delhi",
        feelsLike: 36.36,
        humidity: 60,
        temp: 31.69,
        tempMax: 31 ,
        tempMin: 28,
        weather: "overcast clouds", 
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style= {{ textAlign: "center"}}>
            <h2>
                Weather App 
            </h2>
            <SearchBox updateInfo= {updateInfo} />
            <InfoBox info= {weatherInfo} />
        </div>
    );
}
