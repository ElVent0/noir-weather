import DaysList from "../DaysList/DaysList";
import ScheduleOfToday from "../ScheduleOfToday/ScheduleOfToday";
import {
  RightPartStyled,
  NumberOfDaysButtons,
  List,
  Item,
  NavLinkStyled,
} from "./RightPart.styled";

const RigthPart = () => {
  return (
    <RightPartStyled>
      <NumberOfDaysButtons>
        <List>
          <Item>
            <NavLinkStyled>7 днів</NavLinkStyled>
          </Item>
          <Item>
            <NavLinkStyled>14 днів</NavLinkStyled>
          </Item>
        </List>
      </NumberOfDaysButtons>
      <div>
        <DaysList />
        <ScheduleOfToday />
      </div>
    </RightPartStyled>
  );
};

export default RigthPart;
