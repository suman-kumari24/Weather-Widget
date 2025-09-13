import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
    const INIT_URL =
     "https://images.unsplash.com/photo-1617125305042-9c58831f3050?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
     let HOT_URL = 
     "https://images.unsplash.com/photo-1614590474556-801972bd1b93?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";  
    let COLD_URL =
     "https://images.unsplash.com/photo-1646070301167-d497ab1f362e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
      let RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={
                        info.humidity > 80 
                        ? RAIN_URL 
                        : info.temp > 15 
                        ? HOT_URL 
                        : COLD_URL
                     }

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                    {info.city}{
                         info.humidity > 80 
                         ?  <ThunderstormIcon />
                         : info.temp > 15 
                         ? <SunnyIcon />
                         : <AcUnitIcon />
                    }

                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                   <p>Temperature= {info.temp}</p>
                   <p>Humidity= {info.humidity}</p>
                   <p>Max Temp = {info.tempMax}&deg;C</p>
                   <p>Min Temp = {info.tempMin}&deg;C</p>
                   <p> The weather can be described as <i>{info.weather} </i>and feels  like {info.feelsLike}&deg;C</p>


                    </Typography>
                </CardContent>
               
            </Card>
                </div>
        </div>
    )
}

