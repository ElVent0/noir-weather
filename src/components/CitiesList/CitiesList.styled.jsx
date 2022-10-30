import styled from "styled-components";

export const List = styled.ul`
  margin-top: 0.6vw;
  list-style: none;
  background-color: #fff;
  position: relative;
  z-index: 1001;
  font-size: 1.2vw;
  padding: 0.4vw 0 0.4vw 0;
  border-radius: 0.8vw;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  @media (max-width: 768px) {
  }
`;

export const Item = styled.li`
  /* margin-bottom: 0.2vw; */
  background-color: #fff;
  /* border-radius: 0.8vw; */
  padding: 0.2vw 1.2vw;
  cursor: pointer;
  &:hover {
    background-color: #ececec;
  }
  @media (max-width: 768px) {
  }
`;

export const Country = styled.span`
  opacity: 0.4;
`;

export const Flag = styled.img`
  width: 1.1vw;
  margin-right: 0.4vw;
  @media (max-width: 768px) {
  }
`;
