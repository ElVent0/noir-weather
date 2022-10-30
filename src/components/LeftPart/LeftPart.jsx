import CurrentWeather from "../CurrentWeather/CurrentWeather";
import CitiesList from "../CitiesList/CitiesList";
import AirQuality from "../AirQuality/AirQuality";
import {
  LeftPartStyled,
  FormBlock,
  Form,
  Input,
  TodayBlock,
} from "./LeftPart.styled";
import { useState, useEffect } from "react";
import { getLocation } from "../../api/apiLocation";
// import { ImSearch } from "react-icons/im";

const LeftPart = ({ weatherData, onChooseCity }) => {
  const [cityName, setCityName] = useState("");
  const [locationData, setLocationData] = useState(null);
  // const [listOfCities, setListOfCities] = useState();

  const onChangeInput = (e) => {
    setCityName(e.currentTarget.value);
    console.log(cityName);

    const handleData = async () => {
      try {
        const fetchedData = await getLocation(e.currentTarget.value);
        if (fetchedData) {
          setLocationData(fetchedData);
        }
        console.log(1234567890, locationData);
      } catch (e) {
        alert("На даний момент сервер не працює");
      }
    };
    handleData();
  };

  // useEffect(() => {
  // getLocation(cityName);
  // console.log(getLocation(cityName));

  // const handleData = async () => {
  //   try {
  //     const fetchedData = await getLocation(cityName);
  //     if (fetchedData) {
  //       setLocationData(fetchedData);
  //     }
  //     console.log(1234567890, locationData);
  //   } catch (e) {
  //     alert("На даний момент сервер не працює");
  //   }
  // };
  // handleData();
  // }, [cityName]);
  // console.log(2222, weatherData);

  const onSubmit = (e) => {
    e.preventDefault();
    setCityName("");
  };

  const handleClick = (lat, lon) => {
    onChooseCity(lat, lon);
    setCityName("");
  };

  return (
    <LeftPartStyled>
      <FormBlock>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder={weatherData.timezone}
            value={cityName}
            onChange={onChangeInput}
          />
        </Form>
        {locationData !== null && locationData.results && (
          <CitiesList
            locationData={locationData}
            // onChooseCity={onChooseCity}
            handleClick={handleClick}
          />
        )}
      </FormBlock>
      <TodayBlock>
        <CurrentWeather weatherData={weatherData} />
        <AirQuality />
      </TodayBlock>
    </LeftPartStyled>
  );
};

export default LeftPart;
