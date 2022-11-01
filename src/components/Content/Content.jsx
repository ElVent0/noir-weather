import LeftPart from "../LeftPart/LeftPart";
import RightPart from "../RightPart/RightPart";
import { ContentBlock } from "./Content.styled";
import { useState, useEffect, useRef } from "react";
import { getData } from "../../api/apiWeather";
import { getDataFromSearch } from "../../api/apiWeather";
import { useNavigate } from "react-router-dom";
import { getLocation } from "../../api/apiLocation";

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
  const [chosenLat, setChosenLat] = useState(null);
  const [chosenLon, setChosenLon] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [cityName, setCityName] = useState("");

  // ----------------------------------------------

  useEffect(() => {
    setIsLoading(true);

    const handleData = async () => {
      try {
        const fetchedData = await getData();
        if (fetchedData) {
          setWeatherData(fetchedData);
        }
      } catch (e) {
        alert("На даний момент сервер не працює");
      } finally {
        setIsLoading(false);
      }
    };

    // if (localStorage.getItem("location")) {
    //   const a = async (lat, lon) => {
    //     try {
    //       const fetchedData = await getDataFromSearch(lat, lon);
    //       if (fetchedData) {
    //         setWeatherData(fetchedData);
    //         console.log("On change data", fetchedData);
    //       }
    //     } catch (e) {
    //       alert("На даний момент сервер не працює");
    //     }
    //   };
    //   a(
    //     JSON.parse(localStorage.getItem("location")).latitude,
    //     JSON.parse(localStorage.getItem("location")).longitude
    //   );
    // } else {
    //   console.log("bad");
    handleData();
    // }
  }, []);

  const onChooseCity = async (lat, lon) => {
    setChosenLat(lat);
    setChosenLon(lon);
    setCityName("");
  };

  useEffect(() => {
    if (chosenLat != null && chosenLon != null) {
      const a = async (lat, lon) => {
        try {
          const fetchedData = await getDataFromSearch(lat, lon);
          if (fetchedData) {
            setWeatherData(fetchedData);
          }
        } catch (e) {
          alert("На даний момент сервер не працює");
        }
      };
      a(chosenLat, chosenLon);
    }
  }, [chosenLat, chosenLon]);

  // const handleData = async (cityName) => {
  //   try {
  //     const fetchedData = await getLocation(cityName);
  //     if (fetchedData) {
  //       setLocationData(fetchedData);
  //       console.log(
  //         "12345667768678685685687568568658-------------------------",
  //         fetchedData
  //       );
  //     }
  //     console.log(1234567890, locationData);
  //   } catch (e) {
  //     alert(e, "На даний момент сервер не працює hahaha");
  //   }
  // };

  const onChangeInput = (e) => {
    setCityName(e.currentTarget.value);

    // handleData(cityName);
  };

  useEffect(() => {
    // getLocation(cityName);
    // console.log(getLocation(cityName));

    const handleData = async () => {
      try {
        const fetchedData = await getLocation(cityName);
        if (fetchedData) {
          setLocationData(fetchedData);
          // console.log("----1234567890----", fetchedData);
        }
      } catch (e) {
        alert("На даний момент сервер не працює");
      }
    };
    handleData();
  }, [cityName]);

  const onReset = () => {
    setCityName("");
  };

  return (
    <ContentBlock>
      {/* {isLoading && <Loading />} */}
      {!isLoading && (
        <>
          <LeftPart
            weatherData={weatherData}
            onChooseCity={onChooseCity}
            onChangeInput={onChangeInput}
            locationData={locationData}
            cityName={cityName}
            onReset={onReset}
          />
          <RightPart weatherData={weatherData} currentHours={currentHours[0]} />
        </>
      )}
    </ContentBlock>
  );
};

export default Content;
