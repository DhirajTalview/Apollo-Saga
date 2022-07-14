import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherFetch } from "../weatherSlice";

function Home() {
  const [citySearched, setCitySearched] = useState("");

  const data = useSelector((state) => state.weatherData.data.data)
  const dispatch = useDispatch() 

  const getWeather = (id) => {
    dispatch(getWeatherFetch(id))
  }

  return (
    <div className="home">
      <h1>Search For Weather</h1>
      <input
        type="text"
        placeholder="City name..."
        onChange={(event) => setCitySearched(event.target.value)}
      />
      <button onClick={() => getWeather(citySearched)}>Search</button>
      <div className="weather">
        {data && (
          <>
            <h1> {data?.getCityByName?.name} </h1>
            <h1>
              {" "}
              Temperature: {(data?.getCityByName?.weather?.temperature?.actual - 273).toFixed(2)} <sup>&#176;</sup>C
            </h1>
            <h1>
              Description: {data?.getCityByName?.weather?.summary?.description}
            </h1>
            <h1>Wind Speed: {data?.getCityByName?.weather?.wind?.speed} Kmph</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
