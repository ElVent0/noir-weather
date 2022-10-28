import DaysList from "../DaysList/DaysList";
import ScheduleOfToday from "../ScheduleOfToday/ScheduleOfToday";
import {
  RightPartStyled,
  NumberOfDaysButtons,
  List,
  Item,
  Button,
} from "./RightPart.styled";
import { useState, useEffect, useRef } from "react";

const RigthPart = ({ weatherData }) => {
  // Змінити два наступні масиви на дані з Api (Для списку днів) -------------------------------

  const smallDataForNextDays = [1, 2, 3, 4, 5, 6, 7];
  // const bigDataForNextDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  // -------------------------------------------------------------------------

  const refSmallData = useRef([...smallDataForNextDays]);
  // const refBigData = useRef([...bigDataForNextDays]);

  // const [numberOfDays, setNumberOfDays] = useState("7");
  const [dataForNextDays, setDataForNextDays] = useState(smallDataForNextDays);

  // const changeNumberOfDays = (e) => {
  //   setNumberOfDays(e.currentTarget.id);
  //   console.log(numberOfDays);
  // };

  useEffect(() => {
    // if (numberOfDays === "7") {
    setDataForNextDays(refSmallData.current);
    // } else if (numberOfDays === "14") {
    //   setDataForNextDays(refBigData.current);
    // }
  }, []);

  return (
    <RightPartStyled>
      {/* <NumberOfDaysButtons>
        <List numberOfDays={numberOfDays}>
          <Item numberOfDays={numberOfDays}>
            <Button
              id="7"
              onClick={changeNumberOfDays}
              numberOfDays={numberOfDays}
            >
              7 днів
            </Button>
          </Item>
          <Item numberOfDays={numberOfDays}>
            <Button id="14" onClick={changeNumberOfDays}>
              14 днів
            </Button>
          </Item>
        </List>
      </NumberOfDaysButtons> */}
      {/* <div> */}
      <DaysList weatherData={weatherData} dataForNextDays={dataForNextDays} />
      <ScheduleOfToday />
      {/* </div> */}
    </RightPartStyled>
  );
};

export default RigthPart;
