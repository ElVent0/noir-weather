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
import PeriodData from "../PeriodData/PeriodData";

const ScheduleOfToday = () => {
  return (
    <ScheaduleBlock>
      <ScheaduleBlockContent>
        <Description>
          <Paragraph>ПН</Paragraph>
          <ListDescription>
            <ItemDescription>Температура:</ItemDescription>
            <ItemDescription>Відчувається</ItemDescription>
            <ItemDescription>Вологість</ItemDescription>
            <ItemDescription>Атм. тиск</ItemDescription>
            <ItemDescription>Хмарність</ItemDescription>
            <ItemDescription>Швидкість вітру</ItemDescription>
          </ListDescription>
        </Description>
        <Data>
          <ListData>
            <PeriodData />
            <PeriodData />
            <PeriodData />
            <PeriodData />
          </ListData>
        </Data>
      </ScheaduleBlockContent>
    </ScheaduleBlock>
  );
};

export default ScheduleOfToday;
