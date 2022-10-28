import styled from "styled-components";
// import { NavLink } from "react-router-dom";

export const NumberOfDaysButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.6vw;
  height: 2vw;
`;

export const RightPartStyled = styled.div`
  width: calc(70% - 0.6vw);
`;

export const List = styled.ul`
  display: flex;
  gap: 0.6vw;
`;

export const Item = styled.li`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  opacity: 1;
  /* &:first-child {
    opacity: ${(props) => {
    return props.numberOfDays === "14" ? " .4" : null;
  }};
  }
  &:last-child {
    opacity: ${(props) => {
    return props.numberOfDays === "7" ? " .4" : null;
  }};
  } */
`;

export const Button = styled.button`
  font-weight: 400;
  font-size: 1vw;
  /* line-height: 17px; */
  color: #707070;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 0.8vw;
  padding: 0 0.6vw;
  background-color: transparent;
  border: none;
`;
