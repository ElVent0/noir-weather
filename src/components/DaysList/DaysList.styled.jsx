import styled, { keyframes } from "styled-components";

export const DaysListStyled = styled.div`
  margin-bottom: 0.6vw;
  @media (max-width: 768px) {
    margin-bottom: 0vw;
  }
  & > div {
    @media (max-width: 768px) {
      overflow-x: scroll;
      padding: 6vw 0;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  gap: 0.6vw;
  @media (max-width: 768px) {
    gap: 2vw;
  }
`;

export const ListWithArrow = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const Item = styled.li`
  flex-grow: 1;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.8vw;
  padding: 0.6vw;
  user-select: none;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
  opacity: ${(props) => {
    return props.active && "1";
  }};
  background-color: ${(props) => {
    return props.active && "#fff";
  }};
  box-shadow: ${(props) => {
    return props.active && "0px 4px 10px rgba(0, 0, 0, 0.2)";
  }};
  @media (max-width: 768px) {
    border-radius: 4vw;
    padding: 3vw;
    &:last-child {
      padding-right: 3vw;
    }
  }
`;

export const TopPart = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1vw;
  @media (max-width: 768px) {
    margin-bottom: 3vw;
  }
`;

export const NameOfDay = styled.div`
  margin-right: 0.4vw;
  margin-right: auto;
  @media (max-width: 768px) {
    margin-right: 3vw;
  }
`;

export const Day = styled.p`
  font-weight: 700;
  font-size: 1.2vw;
  color: #707070;
  margin-bottom: auto;
  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

export const NumberDate = styled.p`
  font-weight: 300;
  font-size: 1vw;
  color: #707070;
  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

const MoveUpDown = keyframes`
 0% { bottom: -.3vw; }
 50% { bottom: .3vw; }
 100% { bottom: -.3vw; }
`;

export const Icon = styled.div`
  width: 3vw;
  height: 3vw;
  bottom: -0.3vw;
  position: relative;
  & > svg {
    width: 3vw;
    height: 3vw;
  }
  animation: ${MoveUpDown} 3s infinite ease-in-out
    ${(props) => {
      return `${props.delay}s`;
    }};
  @media (max-width: 768px) {
    width: 6vw;
    height: 6vw;
    bottom: -0.3vw;
  }
  @media (max-width: 768px) {
    width: 6vw;
    height: 6vw;
    bottom: -0.3vw;
    & > svg {
      width: 6vw;
      height: 6vw;
    }
  }
`;

export const IconArraw = styled.div`
  position: relative;
  display: none;
  animation: ${MoveUpDown} 3s infinite ease-in-out
    ${(props) => {
      return `${props.delay}s`;
    }};
  @media (max-width: 768px) {
    margin-right: 4vw;
    display: block;
  }
  & > svg {
    width: 12vw;
    height: 12vw;
  }
`;

export const BottomPart = styled.div`
  display: flex;
  gap: 0.6vw;
  @media (max-width: 768px) {
    gap: 2vw;
  }
`;

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 0.5vw;
  color: #707070;
  margin-bottom: 0.3vw;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 3vw;
    margin-bottom: 1vw;
  }
`;

export const Temperature = styled.p`
  font-weight: 300;
  font-size: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  background: #f7f7f7;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.6vw;
  padding: 6px 0;
  @media (max-width: 768px) {
    font-size: 4vw;
    border-radius: 2vw;
    padding: 6px 0;
  }
`;

export const MinData = styled.div`
  flex-grow: 1;
`;

export const MaxData = styled.div`
  flex-grow: 1;
`;
