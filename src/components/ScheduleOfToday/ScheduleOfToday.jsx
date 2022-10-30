import {
  ScheaduleBlock,
  ScheaduleBlockContent,
  Description,
  Data,
  ListData,
  ListDescription,
  ItemDescription,
  Paragraph,
} from "./ScheduleOfToday.styled";
import nightBg from "../../media/night.jpg";
import morningBg from "../../media/morning.jpg";
import dayBg from "../../media/day.jpg";
import eveningBg from "../../media/evening.jpg";
import PeriodData from "../PeriodData/PeriodData";
import { useState, useEffect } from "react";

const ScheduleOfToday = ({ weatherData, defaultDay, currentHours }) => {
  // const dataSetOne = weatherData.hourly;

  // const tempRef = useRef(weatherData.hourly.temperature_2m);
  // const appTempRef = useRef(weatherData.hourly.apparent_temperature);
  // const humRef = useRef(weatherData.hourly.relativehumidity_2m);
  // const pressRef = useRef(weatherData.hourly.surface_pressure);
  // const cloudRef = useRef(weatherData.hourly.cloudcover);
  // const windRef = useRef(weatherData.hourly.windspeed_10m);

  const [dataForChosenDay, setDataForChosenDay] = useState({
    temperature_2m: weatherData.hourly.temperature_2m.slice(
      0 + 24 * defaultDay,
      24 + 24 * defaultDay
    ),
    apparent_temperature: weatherData.hourly.apparent_temperature.slice(
      0 + 24 * defaultDay,
      24 + 24 * defaultDay
    ),
    relativehumidity_2m: weatherData.hourly.relativehumidity_2m.slice(
      0 + 24 * defaultDay,
      24 + 24 * defaultDay
    ),
    surface_pressure: weatherData.hourly.surface_pressure.slice(
      0 + 24 * defaultDay,
      24 + 24 * defaultDay
    ),
    cloudcover: weatherData.hourly.cloudcover.slice(
      0 + 24 * defaultDay,
      24 + 24 * defaultDay
    ),
    windspeed_10m: weatherData.hourly.windspeed_10m.slice(
      0 + 24 * defaultDay,
      24 + 24 * defaultDay
    ),
  });

  useEffect(() => {
    setDataForChosenDay({
      temperature_2m: weatherData.hourly.temperature_2m.slice(
        0 + 24 * defaultDay,
        24 + 24 * defaultDay
      ),
      apparent_temperature: weatherData.hourly.apparent_temperature.slice(
        0 + 24 * defaultDay,
        24 + 24 * defaultDay
      ),
      relativehumidity_2m: weatherData.hourly.relativehumidity_2m.slice(
        0 + 24 * defaultDay,
        24 + 24 * defaultDay
      ),
      surface_pressure: weatherData.hourly.surface_pressure.slice(
        0 + 24 * defaultDay,
        24 + 24 * defaultDay
      ),
      cloudcover: weatherData.hourly.cloudcover.slice(
        0 + 24 * defaultDay,
        24 + 24 * defaultDay
      ),
      windspeed_10m: weatherData.hourly.windspeed_10m.slice(
        0 + 24 * defaultDay,
        24 + 24 * defaultDay
      ),
    });
  }, [
    defaultDay,
    weatherData.hourly.apparent_temperature,
    weatherData.hourly.cloudcover,
    weatherData.hourly.relativehumidity_2m,
    weatherData.hourly.surface_pressure,
    weatherData.hourly.temperature_2m,
    weatherData.hourly.windspeed_10m,
  ]);

  // useEffect(() => {}, [dataForChosenDay]);

  console.log("----", dataForChosenDay);

  const every_nth = (arr, nth) =>
    arr.filter((e, i) => (i % nth) + 2 === nth - 1);

  const necessaryData = {
    temperature_2m: every_nth(dataForChosenDay.temperature_2m, 3),
    apparent_temperature: every_nth(dataForChosenDay.apparent_temperature, 3),
    relativehumidity_2m: every_nth(dataForChosenDay.relativehumidity_2m, 3),
    surface_pressure: every_nth(dataForChosenDay.surface_pressure, 3),
    cloudcover: every_nth(dataForChosenDay.cloudcover, 3),
    windspeed_10m: every_nth(dataForChosenDay.windspeed_10m, 3),
  };

  console.log(necessaryData);

  const necessaryNightData = {
    temperature_2m: [
      necessaryData.temperature_2m[0],
      necessaryData.temperature_2m[1],
    ],
    apparent_temperature: [
      necessaryData.apparent_temperature[0],
      necessaryData.apparent_temperature[1],
    ],
    relativehumidity_2m: [
      necessaryData.relativehumidity_2m[0],
      necessaryData.relativehumidity_2m[1],
    ],
    surface_pressure: [
      necessaryData.surface_pressure[0],
      necessaryData.surface_pressure[1],
    ],
    cloudcover: [necessaryData.cloudcover[0], necessaryData.cloudcover[1]],
    windspeed_10m: [
      necessaryData.windspeed_10m[0],
      necessaryData.windspeed_10m[1],
    ],
  };

  const necessaryMorningData = {
    temperature_2m: [
      necessaryData.temperature_2m[2],
      necessaryData.temperature_2m[3],
    ],
    apparent_temperature: [
      necessaryData.apparent_temperature[2],
      necessaryData.apparent_temperature[3],
    ],
    relativehumidity_2m: [
      necessaryData.relativehumidity_2m[2],
      necessaryData.relativehumidity_2m[3],
    ],
    surface_pressure: [
      necessaryData.surface_pressure[2],
      necessaryData.surface_pressure[3],
    ],
    cloudcover: [necessaryData.cloudcover[2], necessaryData.cloudcover[3]],
    windspeed_10m: [
      necessaryData.windspeed_10m[2],
      necessaryData.windspeed_10m[3],
    ],
  };

  const necessaryDayData = {
    temperature_2m: [
      necessaryData.temperature_2m[4],
      necessaryData.temperature_2m[5],
    ],
    apparent_temperature: [
      necessaryData.apparent_temperature[4],
      necessaryData.apparent_temperature[5],
    ],
    relativehumidity_2m: [
      necessaryData.relativehumidity_2m[4],
      necessaryData.relativehumidity_2m[5],
    ],
    surface_pressure: [
      necessaryData.surface_pressure[4],
      necessaryData.surface_pressure[5],
    ],
    cloudcover: [necessaryData.cloudcover[4], necessaryData.cloudcover[5]],
    windspeed_10m: [
      necessaryData.windspeed_10m[4],
      necessaryData.windspeed_10m[5],
    ],
  };

  const necessaryEveningData = {
    temperature_2m: [
      necessaryData.temperature_2m[6],
      necessaryData.temperature_2m[7],
    ],
    apparent_temperature: [
      necessaryData.apparent_temperature[6],
      necessaryData.apparent_temperature[7],
    ],
    relativehumidity_2m: [
      necessaryData.relativehumidity_2m[6],
      necessaryData.relativehumidity_2m[7],
    ],
    surface_pressure: [
      necessaryData.surface_pressure[6],
      necessaryData.surface_pressure[7],
    ],
    cloudcover: [necessaryData.cloudcover[6], necessaryData.cloudcover[7]],
    windspeed_10m: [
      necessaryData.windspeed_10m[6],
      necessaryData.windspeed_10m[7],
    ],
  };

  return (
    <ScheaduleBlock>
      <ScheaduleBlockContent>
        <Description>
          <Paragraph>
            {new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
              new Date(weatherData.daily.time[defaultDay])
            )}
          </Paragraph>
          <ListDescription>
            <ItemDescription>
              Temperature <b>°</b>
            </ItemDescription>
            <ItemDescription>
              Apparent <b>°</b>
            </ItemDescription>
            <ItemDescription>
              Humidity <b>%</b>
            </ItemDescription>
            <ItemDescription>
              Pressure <b>hPa</b>
            </ItemDescription>
            <ItemDescription>
              Cloudcover <b>%</b>
            </ItemDescription>
            <ItemDescription>
              Wind speed <b>km/h</b>
            </ItemDescription>
          </ListDescription>
        </Description>
        <Data>
          <ListData>
            <PeriodData
              periodName="night"
              timeLeft="00:00"
              timeRight="03:00"
              hourLeft={0}
              hourRight={3}
              currentHours={currentHours}
              necessaryData={necessaryNightData}
              background={nightBg}
              defaultDay={defaultDay}
            />
            <PeriodData
              periodName="morning"
              timeLeft="06:00"
              timeRight="09:00"
              hourLeft={6}
              hourRight={9}
              currentHours={currentHours}
              necessaryData={necessaryMorningData}
              background={morningBg}
              defaultDay={defaultDay}
            />
            <PeriodData
              periodName="day"
              timeLeft="12:00"
              timeRight="15:00"
              hourLeft={12}
              hourRight={15}
              currentHours={currentHours}
              necessaryData={necessaryDayData}
              background={dayBg}
              defaultDay={defaultDay}
            />
            <PeriodData
              periodName="evening"
              timeLeft="18:00"
              timeRight="21:00"
              hourLeft={18}
              hourRight={21}
              currentHours={currentHours}
              necessaryData={necessaryEveningData}
              background={eveningBg}
              defaultDay={defaultDay}
            />
          </ListData>
        </Data>
      </ScheaduleBlockContent>
    </ScheaduleBlock>
  );
};

export default ScheduleOfToday;
