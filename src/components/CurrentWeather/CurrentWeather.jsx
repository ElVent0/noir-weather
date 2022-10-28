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

const CurrentWeather = ({ weatherData }) => {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  console.log(3333, weatherData);

  useEffect(() => {
    const handleClock = () => {
      setInterval(() => {
        const date = new Date();

        let currentSeconds = date.getSeconds();
        // console.log(currentSeconds);
        if (currentSeconds.toString().length < 2) {
          currentSeconds = `0${currentSeconds}`;
        }
        setSeconds(currentSeconds);

        let currentMinutes = date.getMinutes();
        // console.log(currentMinutes);
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

  const precipitation = weatherData.hourly.precipitation[hours];
  const relativehumidity = weatherData.hourly.relativehumidity_2m[hours];
  const apparent_temperature = Math.round(
    weatherData.hourly.apparent_temperature[hours]
  );

  return (
    <CurrentWeatherStyled>
      <TimeBlock>
        <LeftPartOfTimeBlock>
          <City>{weatherData.timezone}</City>
          <Time>
            {hours}:{minutes}:<span>{seconds}</span>
          </Time>
          <SunRiseDown>
            <span>
              Схід:{" "}
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
              Захід:{" "}
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
        <Icon>{weatherData.current_weather.weathercode}</Icon>
      </TimeBlock>
      <WeatherBlock>
        <TemperatureInfo>
          <Temperature>
            {Math.round(weatherData.current_weather.temperature)}°
          </Temperature>
          <Fealing>Відчувається як {apparent_temperature}°</Fealing>
          <AdditionalInfo>
            <List>
              <Item title="Humidity">{relativehumidity}%</Item>
              <Item title="Windspeed">
                {Math.round(weatherData.current_weather.windspeed)} км/год
              </Item>
              <Item title="Precipitation">{precipitation} мм</Item>
            </List>
          </AdditionalInfo>
        </TemperatureInfo>
      </WeatherBlock>
    </CurrentWeatherStyled>
  );
};

export default CurrentWeather;
