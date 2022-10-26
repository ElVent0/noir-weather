import styled from "styled-components";

export const DaysListStyled = styled.div`
  margin-bottom: 0.6vw;
  /* height: 7vw; */
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  gap: 0.6vw;
`;

export const Item = styled.li`
  flex-grow: 1;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.8vw;
  padding: 0.6vw;
`;

export const TopPart = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1vw;
`;

export const NameOfDay = styled.div`
  margin-right: 0.4vw;
  margin-right: auto;
`;

export const Day = styled.p`
  font-weight: 700;
  font-size: 1.8vw;
  /* line-height: 17px; */
  color: #707070;
  margin-bottom: auto;
`;

export const Date = styled.p`
  font-weight: 300;
  font-size: 1vw;
  /* line-height: 10px; */
  color: #707070;
`;

export const Icon = styled.div`
  width: 2vw;
  height: 2vw;
  background-color: orange;
`;

export const BottomPart = styled.div`
  display: flex;
  gap: 0.6vw;
`;

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 0.5vw;
  /* line-height: 7px; */
  color: #707070;
  margin-bottom: 0.3vw;
  text-align: center;
`;

export const Temperature = styled.p`
  font-weight: 300;
  font-size: 1vw;
  /* line-height: 12px; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  background: #f7f7f7;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.6vw;
  padding: 6px 0;
`;

export const MinData = styled.div`
  flex-grow: 1;
`;

export const MaxData = styled.div`
  flex-grow: 1;
`;
