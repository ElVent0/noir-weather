import CurrentWeather from "../CurrentWeather/CurrentWeather";
import AirQuality from "../AirQuality/AirQuality";
import {
  LeftPartStyled,
  FormBlock,
  Form,
  Input,
  TodayBlock,
} from "./LeftPart.styled";

const LeftPart = ({ weatherData }) => {
  console.log(2222, weatherData);
  return (
    <LeftPartStyled>
      <FormBlock>
        <Form action="">
          <Input type="text" placeholder="Kyiv" />
        </Form>
      </FormBlock>
      <TodayBlock>
        <CurrentWeather weatherData={weatherData} />
        <AirQuality />
      </TodayBlock>
    </LeftPartStyled>
  );
};

export default LeftPart;
