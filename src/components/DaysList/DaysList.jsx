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
  // DayButton,
} from "./DaysList.styled";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DaysList = ({ weatherData, dataForNextDays }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [defaultDay, setDefaultDay] = useState(0);

  useEffect(() => {
    // if (day === "") return;

    // async function fetchUser() {
    //   const user = await FakeAPI.getUser(day);
    //   setUser(user);
    // }
    // fetchUser();

    setDefaultDay(searchParams.get("day"));
  }, [searchParams]);

  const onDayClick = (e) => {
    console.log(e.currentTarget.value);
    setSearchParams({ day: e.currentTarget.value });
  };

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
      <List>
        {dailyData.map((item) => {
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
                <Icon>{item.weatherCode}</Icon>
              </TopPart>
              <BottomPart>
                <MinData>
                  <Paragraph>Мін.</Paragraph>
                  <Temperature>{item.minTemperature}°</Temperature>
                </MinData>
                <MaxData>
                  <Paragraph>Макс.</Paragraph>
                  <Temperature>{item.maxTemperature}°</Temperature>
                </MaxData>
              </BottomPart>
            </Item>
          );
        })}
      </List>
    </DaysListStyled>
  );
};

export default DaysList;
