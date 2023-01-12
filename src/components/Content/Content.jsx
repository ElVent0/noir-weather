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

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/?day=0");
  }, []);

  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [chosenLat, setChosenLat] = useState(null);
  const [chosenLon, setChosenLon] = useState(null);
  const [chosenCity, setChosenCity] = useState(null);
  // const [currentCity, setCurrentCity] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const handleData = async () => {
      try {
        const fetchedData = await getData();
        setChosenCity("Your location");
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
  //     }
  //   } catch (e) {
  //     alert(e, "На даний момент сервер не працює hahaha");
  //   }
  // };

  const onChangeInput = (e) => {
    setCityName(e.currentTarget.value);
    // handleData(cityName);
  };

  useEffect(() => {
    const handleData = async () => {
      try {
        const fetchedData = await getLocation(cityName);
        if (fetchedData) {
          setLocationData(fetchedData);
        }
      } catch (e) {
        alert("На даний момент сервер не працює");
      }
    };
    handleData();
  }, [cityName]);

  const onChooseCity = async (lat, lon, name) => {
    // e.preventDefault();
    console.log("send 3");
    setChosenLat(lat);
    setChosenLon(lon);
    setChosenCity(name);
    setCityName("");
  };

  const onReset = (e) => {
    e.preventDefault();
    console.log("reset");
    setCityName("");
    // setChosenCity("");
  };
  console.log(chosenCity, cityName);

  return (
    <ContentBlock>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <LeftPart
            weatherData={weatherData}
            onChooseCity={onChooseCity}
            onChangeInput={onChangeInput}
            locationData={locationData}
            cityName={cityName}
            onReset={onReset}
            chosenCity={chosenCity}
          />
          <RightPart weatherData={weatherData} currentHours={currentHours[0]} />
        </>
      )}
    </ContentBlock>
  );
};

export default Content;
