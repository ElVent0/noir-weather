import LeftPart from "../LeftPart/LeftPart";
import RightPart from "../RightPart/RightPart";
import { ContentBlock } from "./Content.styled";
import { useState, useEffect } from "react";
import { getData } from "../../api/api";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const currentHours = useState(new Date().getHours());
  // Тут всі погодні дані -------------------------

  // const getFirstData = async () => {
  //   try {
  //     const data = await fetch(
  //       `https://api.open-meteo.com/v1/forecast?latitude=50.5&longitude=30.375&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,surface_pressure,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`
  //     );
  //     const parsedData = await data.json();
  //     return parsedData;
  //   } catch (e) {
  //     alert(e);
  //   }
  // };

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/?day=0");
  }, []);

  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // ----------------------------------------------

  useEffect(() => {
    setIsLoading(true);

    const handleData = async () => {
      try {
        const fetchedData = await getData();
        if (fetchedData) {
          setWeatherData(fetchedData);
        }
        // console.log(1111, fetchedData);
      } catch (e) {
        alert("На даний момент сервер не працює");
      } finally {
        setIsLoading(false);
      }
    };

    handleData();
  }, []);

  return (
    <ContentBlock>
      {/* {isLoading && <Loading />} */}
      {!isLoading && (
        <>
          <LeftPart weatherData={weatherData} />
          <RightPart weatherData={weatherData} currentHours={currentHours[0]} />
        </>
      )}
    </ContentBlock>
  );
};

export default Content;
