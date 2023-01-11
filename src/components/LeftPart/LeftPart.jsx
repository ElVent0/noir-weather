import CurrentWeather from "../CurrentWeather/CurrentWeather";
import CitiesList from "../CitiesList/CitiesList";
// import AirQuality from "../AirQuality/AirQuality";
import { RiCloseCircleFill } from "react-icons/ri";
import {
  LeftPartStyled,
  FormBlock,
  Form,
  Input,
  TodayBlock,
  ButtonClose,
} from "./LeftPart.styled";

const LeftPart = ({
  weatherData,
  onChooseCity,
  onChangeInput,
  locationData,
  cityName,
  onReset,
  chosenCity,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(234234234);
    handleClick(
      locationData.results[0].latitude,
      locationData.results[0].longitude,
      locationData.results[0].name
    );
  };

  const handleClick = (latitude, longitude, name) => {
    onChooseCity(latitude, longitude, name);
    // console.log(12345678, latitude, longitude, name, locationData);
    localStorage.setItem(
      "location",
      JSON.stringify({ latitude: latitude, longitude: longitude, name: name })
    );
  };

  const chosenCityTemplate =
    chosenCity === "Your location" ? "Search (In English)" : chosenCity;

  return (
    <LeftPartStyled>
      <FormBlock>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder={chosenCityTemplate}
            value={cityName}
            onChange={onChangeInput}
          />
          <ButtonClose onClick={onReset}>
            <RiCloseCircleFill />
          </ButtonClose>
        </Form>
        {locationData !== null && locationData.results && (
          <CitiesList
            locationData={locationData}
            onChooseCity={onChooseCity}
            handleClick={handleClick}
          />
        )}
      </FormBlock>
      <TodayBlock>
        <CurrentWeather
          weatherData={weatherData}
          // locationData={locationData}
          // cityName={cityName}
          chosenCity={chosenCity}
        />
        {/* <AirQuality /> */}
      </TodayBlock>
    </LeftPartStyled>
  );
};

export default LeftPart;
