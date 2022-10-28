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
            <PeriodData periodName="Ніч" timeLeft="00:00" timeRight="00:03" />
            <PeriodData periodName="Ранок" timeLeft="06:00" timeRight="09:00" />
            <PeriodData periodName="Вечір" timeLeft="12:00" timeRight="15:00" />
            <PeriodData periodName="День" timeLeft="18:00" timeRight="21:00" />
          </ListData>
        </Data>
      </ScheaduleBlockContent>
    </ScheaduleBlock>
  );
};

export default ScheduleOfToday;
