import styled from "styled-components";

export const ItemData = styled.li`
  background-image: ${(props) => {
    return `url(${props.background})`;
  }};
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.8vw;
  flex-grow: 1;
  @media (max-width: 768px) {
    border-radius: 4vw;
  }
`;

export const Columns = styled.ul`
  display: flex;
  gap: 0.6vw;
  padding: 0.6vw;
  @media (max-width: 768px) {
    gap: 3vw;
    padding: 3vw;
  }
`;

export const Period = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 0px 0px 0.6vw 0.6vw;
  font-weight: 300;
  font-size: 1vw;
  text-align: center;
  color: #707070;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.2vw 0;
  @media (max-width: 768px) {
    font-size: 3.4vw;
    padding: 1vw 0;
    border-radius: 0 0 4vw 4vw;
  }
`;

export const LeftColumn = styled.li`
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.2vw);
  border-radius: 0.6vw;
  padding-bottom: 0.6vw;
  @media (max-width: 768px) {
    border-radius: 4vw;
    padding-bottom: 3vw;
  }
  & > div {
    background-color: ${(props) => {
      return props.time === true ? "#ff9900" : null;
    }};
    color: ${(props) => {
      return props.time === true ? "rgba(255, 255, 255, 1)" : null;
    }};
  }
`;

export const RightColumn = styled.li`
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.2vw);
  border-radius: 0.6vw;
  padding-bottom: 0.6vw;
  @media (max-width: 768px) {
    border-radius: 4vw;
    padding-bottom: 3vw;
  }
  & > div {
    background-color: ${(props) => {
      return props.time === true ? "#ff9900" : null;
    }};
    color: ${(props) => {
      return props.time === true ? "rgba(255, 255, 255, 1)" : null;
    }};
  }
`;

export const Time = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 0.6vw;
  font-weight: 300;
  font-size: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  padding: 0.2vw 0.8vw;
  margin-bottom: 0.6vw;
  @media (max-width: 768px) {
    border-radius: 4vw;
    font-size: 3vw;
    padding: 1vw 3vw;
    margin-bottom: 3vw;
  }
`;

export const List = styled.ul`
  /* padding: 0 0.4vw; */
`;

export const Item = styled.li`
  font-weight: 700;
  font-size: 1vw;
  /* line-height: 12px; */
  text-align: center;
  color: #ffffff;
  margin-bottom: 0.4vw;
  @media (max-width: 768px) {
    font-size: 3vw;
    margin-bottom: 3vw;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
