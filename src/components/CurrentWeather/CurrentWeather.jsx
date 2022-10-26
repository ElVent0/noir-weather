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

const CurrentWeather = () => {
  return (
    <CurrentWeatherStyled>
      <TimeBlock>
        <LeftPartOfTimeBlock>
          <City>Kyiv</City>
          <Time>
            22:56:<span>34</span>
          </Time>
          <SunRiseDown>
            <span>Схід: 10:00</span>
            <span>Захід: 22:00</span>
          </SunRiseDown>
        </LeftPartOfTimeBlock>
        <Icon></Icon>
      </TimeBlock>
      <WeatherBlock>
        <TemperatureInfo>
          <Temperature>+12°</Temperature>
          <Fealing>Відчувається як +14°</Fealing>
          <AdditionalInfo>
            <List>
              <Item>34%</Item>
              <Item>4 м/c</Item>
              <Item>14 мм</Item>
            </List>
          </AdditionalInfo>
        </TemperatureInfo>
      </WeatherBlock>
    </CurrentWeatherStyled>
  );
};

export default CurrentWeather;
