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
}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    handleClick(
      locationData.results[0].latitude,
      locationData.results[0].longitude
    );
  };

  const handleClick = (latitude, longitude) => {
    onChooseCity(latitude, longitude);
    localStorage.setItem(
      "location",
      JSON.stringify({ latitude: latitude, longitude: longitude })
    );
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
          locationData={locationData}
          cityName={cityName}
        />
        {/* <AirQuality /> */}
      </TodayBlock>
    </LeftPartStyled>
  );
};

export default LeftPart;
