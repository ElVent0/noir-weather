import styled from "styled-components";

export const ItemData = styled.li`
  background: teal;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.8vw;
  flex-grow: 1;
`;

export const Columns = styled.ul`
  display: flex;
  gap: 0.6vw;
  padding: 0.6vw;
`;

export const Period = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 0px 0px 0.6vw 0.6vw;
  font-weight: 300;
  font-size: 1vw;
  /* line-height: 12px; */
  text-align: center;
  color: #707070;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.2vw 0;
`;

export const LeftColumn = styled.li`
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 0.6vw;

  padding-bottom: 0.6vw;
`;

export const RightColumn = styled.li`
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 0.6vw;
  padding-bottom: 0.6vw;
`;

export const Time = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 0.6vw;
  font-weight: 300;
  font-size: 1vw;
  /* line-height: 7px; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  padding: 0.2vw 0.8vw;
  margin-bottom: 0.6vw;
`;

export const List = styled.ul`
  padding: 0 1vw;
`;

export const Item = styled.li`
  font-weight: 700;
  font-size: 1vw;
  /* line-height: 12px; */
  text-align: center;
  color: #ffffff;
  margin-bottom: 0.4vw;
  &:last-child {
    margin-bottom: 0;
  }
`;
