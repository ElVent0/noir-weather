import {
  List,
  Item,
  TopPart,
  NameOfDay,
  Day,
  Date,
  Icon,
  BottomPart,
  MinData,
  MaxData,
  Paragraph,
  Temperature,
  DaysListStyled,
} from "./DaysList.styled";

const DaysList = () => {
  const dataForNextDays = [1, 2, 3, 4, 5, 6, 7];
  //   const numberOfDays = dataForNextDays.length;
  return (
    <DaysListStyled>
      <List>
        {dataForNextDays.map((item) => {
          return (
            <Item key={item}>
              <TopPart>
                <NameOfDay>
                  <Day>ПН</Day>
                  <Date>01.10</Date>
                </NameOfDay>
                <Icon></Icon>
              </TopPart>
              <BottomPart>
                <MinData>
                  <Paragraph>Мін.</Paragraph>
                  <Temperature>+4°</Temperature>
                </MinData>
                <MaxData>
                  <Paragraph>Макс.</Paragraph>
                  <Temperature>+10°</Temperature>
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
