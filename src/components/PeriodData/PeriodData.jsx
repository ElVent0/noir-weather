import {
  ItemData,
  Period,
  Columns,
  LeftColumn,
  RightColumn,
  Time,
  List,
  Item,
} from "./PeriodData.styled";

const PeriodData = ({
  periodName,
  timeLeft,
  timeRight,
  hourLeft,
  hourRight,
  necessaryData,
  background,
  currentHours,
  defaultDay,
}) => {
  const currentTime = Math.round(currentHours / 3) * 3;

  return (
    <ItemData background={background}>
      <Period>
        {periodName.charAt(0).toUpperCase() + periodName.slice(1)}
      </Period>
      <Columns>
        <LeftColumn
          time={
            (hourLeft === currentTime || hourLeft === 24) && defaultDay === "0"
          }
        >
          <Time>{timeLeft}</Time>
          <List>
            <Item>{Math.round(necessaryData.temperature_2m[0])}</Item>
            <Item>{Math.round(necessaryData.apparent_temperature[0])}</Item>
            <Item>{necessaryData.relativehumidity_2m[0]}</Item>
            <Item>{Math.round(necessaryData.surface_pressure[0])}</Item>
            <Item>{necessaryData.cloudcover[0]}</Item>
            <Item>{Math.round(necessaryData.windspeed_10m[0])}</Item>
          </List>
        </LeftColumn>
        <RightColumn time={hourRight === currentTime && defaultDay === "0"}>
          <Time>{timeRight}</Time>
          <List>
            <Item>{Math.round(necessaryData.temperature_2m[1])}</Item>
            <Item>{Math.round(necessaryData.apparent_temperature[1])}</Item>
            <Item>{necessaryData.relativehumidity_2m[1]}</Item>
            <Item>{Math.round(necessaryData.surface_pressure[1])}</Item>
            <Item>{necessaryData.cloudcover[1]}</Item>
            <Item>{Math.round(necessaryData.windspeed_10m[1])}</Item>
          </List>
        </RightColumn>
      </Columns>
    </ItemData>
  );
};

export default PeriodData;
