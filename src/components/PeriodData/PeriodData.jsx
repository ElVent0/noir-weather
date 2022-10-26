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

const PeriodData = () => {
  return (
    <ItemData>
      <Period>Ніч</Period>
      <Columns>
        <LeftColumn>
          <Time>00:00</Time>
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
          <Time>03:00</Time>
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
