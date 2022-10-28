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

const PeriodData = ({ periodName, timeLeft, timeRight }) => {
  return (
    <ItemData>
      <Period>{periodName}</Period>
      <Columns>
        <LeftColumn>
          <Time>{timeLeft}</Time>
          <List>
            <Item>+10*</Item>
            <Item>+10*</Item>
            <Item>+10*</Item>
            <Item>+10*</Item>
            <Item>+10*</Item>
            <Item>+10*</Item>
          </List>
        </LeftColumn>
        <RightColumn>
          <Time>{timeRight}</Time>
          <List>
            <Item>+10*</Item>
            <Item>+10*</Item>
            <Item>+10*</Item>
            <Item>+10*</Item>
            <Item>+10*</Item>
            <Item>+10*</Item>
          </List>
        </RightColumn>
      </Columns>
    </ItemData>
  );
};

export default PeriodData;
