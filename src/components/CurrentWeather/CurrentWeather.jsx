import {
  CurrentWeatherStyled,
  TimeBlock,
  WeatherBlock,
  LeftPartOfTimeBlock,
  City,
  Time,
  SunRiseDown,
  Icon,
  Temperature,
  Fealing,
  List,
  Item,
  AdditionalInfo,
  TemperatureInfo,
} from "./CurrentWeather.styled";
import { useState, useEffect } from "react";
import { IoMdSunny } from "react-icons/io";
import {
  BsFillCloudRainFill,
  BsFillCloudFill,
  BsFillCloudLightningRainFill,
  BsFillCloudFogFill,
} from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";

import { WiHumidity } from "react-icons/wi";
import { FaThermometerHalf } from "react-icons/fa";
import { GiWindsock } from "react-icons/gi";
import { SiRainmeter } from "react-icons/si";

const CurrentWeather = ({
  weatherData,
  // locationData,
  // cityName,
  // currentCity,
  chosenCity,
}) => {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  // const sun = weatherData.current_weather.weathercode;

  const sun = [0].some(
    (item) => item === weatherData.current_weather.weathercode
  );
  const clouds = [1, 2, 3].some(
    (item) => item === weatherData.current_weather.weathercode
  );
  const fog = [45, 48].some(
    (item) => item === weatherData.current_weather.weathercode
  );
  const rain = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67].some(
    (item) => item === weatherData.current_weather.weathercode
  );
  const snow = [71, 73, 75, 77, 85, 86].some(
    (item) => item === weatherData.current_weather.weathercode
  );
  const thunder = [95, 96, 99].some(
    (item) => item === weatherData.current_weather.weathercode
  );

  useEffect(() => {
    const handleClock = () => {
      setInterval(() => {
        const date = new Date();

        let currentSeconds = date.getSeconds();
        if (currentSeconds.toString().length < 2) {
          currentSeconds = `0${currentSeconds}`;
        }
        setSeconds(currentSeconds);

        let currentMinutes = date.getMinutes();
        if (currentMinutes.toString().length < 2) {
          currentMinutes = `0${currentMinutes}`;
        }
        setMinutes(currentMinutes);

        let currentHours = date.getHours();
        if (currentHours.toString().length < 2) {
          currentHours = `0${currentHours}`;
        }
        setHours(currentHours);
      }, 1000);
    };
    handleClock();
  }, []);

  const numberOfItemForCurrentWeather =
    hours.toString().indexOf("0") === 0 ? hours.toString().slice(1) : hours;
  const precipitation =
    weatherData.hourly.precipitation[numberOfItemForCurrentWeather];
  const relativehumidity =
    weatherData.hourly.relativehumidity_2m[numberOfItemForCurrentWeather];
  const apparent_temperature = Math.round(
    weatherData.hourly.apparent_temperature[numberOfItemForCurrentWeather]
  );

  return (
    <CurrentWeatherStyled>
      <TimeBlock>
        <LeftPartOfTimeBlock>
          <City>{chosenCity}</City>
          <Time>
            {hours}:{minutes}:<span>{seconds}</span>
          </Time>
          <SunRiseDown>
            <span>
              Sunrise:{" "}
              {new Date(weatherData.daily.sunrise[0]).getHours().toString()
                .length < 2
                ? `0${new Date(weatherData.daily.sunrise[0]).getHours()}`
                : new Date(weatherData.daily.sunrise[0]).getHours()}
              :
              {new Date(weatherData.daily.sunrise[0]).getMinutes().toString()
                .length < 2
                ? `0${new Date(weatherData.daily.sunrise[0]).getMinutes()}`
                : new Date(weatherData.daily.sunrise[0]).getMinutes()}
            </span>
            <span>
              Sunset:{" "}
              {new Date(weatherData.daily.sunset[0]).getHours().toString()
                .length < 2
                ? `0${new Date(weatherData.daily.sunset[0]).getHours()}`
                : new Date(weatherData.daily.sunset[0]).getHours()}
              :
              {new Date(weatherData.daily.sunset[0]).getMinutes().toString()
                .length < 2
                ? `0${new Date(weatherData.daily.sunset[0]).getMinutes()}`
                : new Date(weatherData.daily.sunset[0]).getMinutes()}
            </span>
          </SunRiseDown>
        </LeftPartOfTimeBlock>
        {/* <Icon>{weatherData.current_weather.weathercode}</Icon> */}
        <Icon>
          {sun && <IoMdSunny size={"3.4vw"} color="#fff" />}
          {clouds && <BsFillCloudFill size={"3.4vw"} color="#fff" />}
          {fog && <BsFillCloudFogFill size={"3.4vw"} color="#fff" />}
          {rain && <BsFillCloudRainFill size={"3.4vw"} color="#fff" />}
          {snow && <FaRegSnowflake size={"3.4vw"} color="#fff" />}
          {thunder && (
            <BsFillCloudLightningRainFill size={"3.4vw"} color="#fff" />
          )}
        </Icon>
      </TimeBlock>
      <WeatherBlock>
        <TemperatureInfo>
          <Temperature>
            <FaThermometerHalf />
            {Math.round(weatherData.current_weather.temperature)}°
          </Temperature>
          <Fealing>Apparent {apparent_temperature}°</Fealing>
          <AdditionalInfo>
            <List>
              <Item data="Humidity">
                <WiHumidity
                  style={{
                    position: "relative",
                    transform: "scale(1.6)",
                    margin: "0 .1vw 0 0",
                  }}
                />
                {relativehumidity}%
              </Item>
              <Item data="Windspeed">
                <GiWindsock
                  style={{
                    position: "relative",
                    transform: "translate(.2vw)",
                    margin: "0 .2vw 0 0",
                  }}
                />
                {Math.round(weatherData.current_weather.windspeed)} km/h
              </Item>
              <Item data="Precipitation">
                <SiRainmeter
                  style={{
                    position: "relative",
                    transform: "translate(.1vw)",
                    margin: "0 .2vw 0 0",
                  }}
                />
                {precipitation} mm
              </Item>
            </List>
          </AdditionalInfo>
        </TemperatureInfo>
      </WeatherBlock>
    </CurrentWeatherStyled>
  );
};

export default CurrentWeather;
