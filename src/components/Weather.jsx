import React, { useState } from "react";

export const Weather = () => {
  const [input, setinput] = useState("Ankara");
  const [results, setresults] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=093ede1ae3b5a8dca9449e21c6449f69&lang=tr&units=metric`
    )
      .then((res) => res.json())
      .then((result) => setresults(result));
    console.log(results);
    //setinput("");
  };

  return (
    <div className="app">
      <div className="weather-form">
        <form>
          <input
            name="location"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="Şehir girin"
          />
          <button onClick={handleClick}>O</button>
        </form>
      </div>
      {typeof results != "undefined" ? (
        <div className="Result">
          <div className="name">{results.name}</div>
          <div className="derece">{results.main.temp} °C</div>
          <div className="havaolayi">{results.weather[0].description}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
