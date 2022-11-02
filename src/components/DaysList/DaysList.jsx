import {
  List,
  Item,
  TopPart,
  NameOfDay,
  Day,
  NumberDate,
  Icon,
  BottomPart,
  MinData,
  MaxData,
  Paragraph,
  Temperature,
  DaysListStyled,
  ListWithArrow,
  IconArraw,
  // DayButton,
} from "./DaysList.styled";
import { IoMdSunny } from "react-icons/io";
import {
  BsFillCloudRainFill,
  BsFillCloudFill,
  BsFillCloudLightningRainFill,
  BsFillCloudFogFill,
} from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

// import { useSearchParams } from "react-router-dom";
// import { useState, useEffect } from "react";

const DaysList = ({ weatherData, onDayClick, defaultDay }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [defaultDay, setDefaultDay] = useState(0);

  // useEffect(() => {
  //   // if (day === "") return;

  //   // async function fetchUser() {
  //   //   const user = await FakeAPI.getUser(day);
  //   //   setUser(user);
  //   // }
  //   // fetchUser();

  //   setDefaultDay(searchParams.get("day"));
  // }, [searchParams]);

  // const onDayClick = (e) => {
  //   console.log(e.currentTarget.value);
  //   setSearchParams({ day: e.currentTarget.value });
  // };

  const dailyData = [];
  for (let i = 0; i < 7; i += 1) {
    const timeDate =
      new Date(weatherData.daily.time[i]).getDate().toString().length < 2
        ? `0${new Date(weatherData.daily.time[i]).getDate()}`
        : `${new Date(weatherData.daily.time[i]).getDate()}`;
    const timeMonth =
      (new Date(weatherData.daily.time[i]).getMonth() + 1).toString().length < 2
        ? `0${new Date(weatherData.daily.time[i]).getMonth() + 1}`
        : `${new Date(weatherData.daily.time[i]).getMonth() + 1}`;

    dailyData.push({
      id: i,
      day: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
        new Date(weatherData.daily.time[i])
      ),
      time: `${timeDate}.${timeMonth}`,
      // icon: weatherData.daily.weatherCode[i],
      weatherCode: weatherData.daily.weathercode[i],
      minTemperature: Math.round(weatherData.daily.temperature_2m_min[i]),
      maxTemperature: Math.round(weatherData.daily.temperature_2m_max[i]),
    });
  }
  return (
    <DaysListStyled>
      <ListWithArrow>
        <IconArraw>
          <BsFillArrowRightCircleFill color="#8c8c8c" />
        </IconArraw>
        <List>
          {dailyData.map((item) => {
            const sun = [0].some(
              (currentItem) =>
                currentItem === weatherData.daily.weathercode[item.id]
            );
            const clouds = [1, 2, 3].some(
              (currentItem) =>
                currentItem === weatherData.daily.weathercode[item.id]
            );
            const fog = [45, 48].some(
              (currentItem) =>
                currentItem === weatherData.daily.weathercode[item.id]
            );
            const rain = [
              51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82,
            ].some(
              (currentItem) =>
                currentItem === weatherData.daily.weathercode[item.id]
            );
            const snow = [71, 73, 75, 77, 85, 86].some(
              (currentItem) =>
                currentItem === weatherData.daily.weathercode[item.id]
            );
            const thunder = [95, 96, 99].some(
              (currentItem) =>
                currentItem === weatherData.daily.weathercode[item.id]
            );

            const weather = () => {
              if (sun) {
                return "sun";
              } else if (clouds) {
                return "clouds";
              } else if (fog) {
                return "fog";
              } else if (rain) {
                return "rain";
              } else if (snow) {
                return "snow";
              } else if (thunder) {
                return "thunder";
              }
            };

            const delay = `.${item.id * 1.0}`;
            return (
              <Item
                key={item.time}
                onClick={onDayClick}
                value={item.id}
                active={Number(item.id) === Number(defaultDay)}
              >
                <TopPart>
                  <NameOfDay>
                    <Day>{item.day}</Day>
                    <NumberDate>{item.time}</NumberDate>
                  </NameOfDay>
                  <Icon weather={weather()} delay={delay}>
                    {sun && <IoMdSunny color="#ff9900" />}
                    {clouds && <BsFillCloudFill color="#989898" />}
                    {fog && <BsFillCloudFogFill color="#c9c9c9" />}
                    {rain && <BsFillCloudRainFill color="#5b5b5b" />}
                    {snow && <FaRegSnowflake color="#7dadff" />}
                    {thunder && (
                      <BsFillCloudLightningRainFill color="#414141" />
                    )}
                  </Icon>
                </TopPart>
                <BottomPart>
                  <MinData>
                    <Paragraph>Min.</Paragraph>
                    <Temperature>{item.minTemperature}°</Temperature>
                  </MinData>
                  <MaxData>
                    <Paragraph>Max.</Paragraph>
                    <Temperature>{item.maxTemperature}°</Temperature>
                  </MaxData>
                </BottomPart>
              </Item>
            );
          })}
        </List>
      </ListWithArrow>
    </DaysListStyled>
  );
};

export default DaysList;
