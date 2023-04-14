import React, { useState } from "react";
import LocalClock from "./localClock"
import LocationClock from "./LocationClock.jsx";

function App() {
  const [data, setData] = useState('')
  const [location, setLocation] = useState('')
  const [placeHolder, setPlaceHolder] = useState('Enter Your City Name')

  const cx = import.meta.env.VITE_CX
  const googleAPIKey = import.meta.env.VITE_API_KEY;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=4916c6ec25f9c96b9095d8616f26b592`

  function searchLocation (event) {
    if (event.key === 'Enter') {
      fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
          setData(data)
          if (data.name != undefined) {
            changeBackground()
            setPlaceHolder('Enter Your City Name')
          }
          else
            alert("Please input a valid location")
            setPlaceHolder('Invalid Location')
        })
        .catch(error => {
          console.log(error)
        })
      setLocation('')
    }
  }

  function changeBackground() {
    const backgroundUrl = `https://www.googleapis.com/customsearch/v1?key=${googleAPIKey}&cx=${cx}&q=${location}&searchType=image`
    fetch(backgroundUrl)
      .then(response => response.json())
      .then(data => {
        var ele = document.getElementsByClassName("app")[0]
        ele.style.backgroundImage = `linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url(${data.items[0].link})`;
      })
  }

  return (
    <div className="app text-center display-3 text-light">
      Weather App
      {data.name === undefined &&
      <div className="startSearch">
        <div className="localClock">
          <LocalClock />
        </div>
        <input className="start px-4"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder={placeHolder}
          type="text" />       
      </div>
      }
      {data.name !== undefined &&
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder={placeHolder}
          type="text"/>
      </div>
      }
      <div className="container">
        <div className="top">
          <div className="location">
            <h1>{data.name}</h1>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          <div className="image">
            {data.weather ? <img src={data.weather[0].icon}  alt={Imageicon}/> : null}
          </div>
        </div>
        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='fw-lighter'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='fw-lighter'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='fw-lighter'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App