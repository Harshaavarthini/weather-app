import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import cloud_icon from '../Assets/cloud.png'
// import drizzle_icon from '../Assets/drizzle.png'
// import rain_icon from '../Assets/rain.png'
// import clear_icon from '../Assets/clear.png'
// import snow_icon from '../Assets/snow.png'
import humidity_icon from '../Assets/humidity.png'
import wind_icon from '../Assets/wind.png'


const WeatherApp = () => {

    let api_key="d465121e405ba7be18d6e0649071ffaf";

    const [icon,setIcon] = useState(cloud_icon);

    const search = async () => {
        const element = document.getElementsByClassName("place-input");
        if (element[0].value===""){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`

        let response = await fetch(url);

        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");

        const wind = document.getElementsByClassName("windspeed");

        const temperature = document.getElementsByClassName("temperature");

        const location  = document.getElementsByClassName("location");

        const icon_code = data.weather[0].icon;

        
        let icon_url = ` https://openweathermap.org/img/wn/${icon_code}@2x.png`;

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "km/h";
        temperature[0].innerHTML = data.main.temp + "°C";
        location[0].innerHTML = data.name;
        setIcon(icon_url);

        // if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){

        //     setIcon(clear_icon);
        // }
        // else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
        //     setIcon(cloud_icon);
        // }
        // else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
        //     setIcon(drizzle_icon);
        // } 
        // else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
        //     setIcon(drizzle_icon);
        // }   
        // else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
        //     setIcon(rain_icon);
        // }   
        // else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
        //     setIcon(rain_icon);
        // }  
        // else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
        //     setIcon(snow_icon);
        // } 
        // else{
        //     setIcon(clear_icon);
        // }
    }

  return (
    <div className='container'>

        <div className='search-bar'>
            <input type='text' className='place-input' placeholder='Type the place'/>

            <div className='search-icon' onClick={() => {search()}}>
                <img src={search_icon} alt='serach_icon'/>
            </div>

        </div>

        <div className='weather-image'>
            <img src={icon} alt='cloud-icon'/>
        </div>

        <div className='temperature'>20°C</div>

        <div className='location'>Chennai</div>

        <div className='data-container'>

            <div className='element'>
                <img src={humidity_icon} alt="humidity-icon" className="icon" />

                <div className="data">
                    <div className='humidity-percent'>70%</div>
                    <div className="text">Humidity</div>
                </div>

            </div>

            <div className='element'>
                <img src={wind_icon} alt="wind-icon" className="icon" />

                <div className="data">

                    <div className='windspeed'>30km/h</div>

                    <div className="text">Wind Speed</div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default WeatherApp