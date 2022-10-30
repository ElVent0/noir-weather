import styled from "styled-components";

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 1vw;
  /* line-height: 12px; */
  margin-bottom: 0.4vw;
  color: #707070;
  @media (max-width: 768px) {
    font-size: 4vw;
    margin-bottom: 2vw;
  }
`;

export const Map = styled.div`
  background-color: teal;
  border-radius: 0.8vw;
  /* height: calc(100% - 10.6vw); */
  height: 57%;
  @media (max-width: 768px) {
    border-radius: 4vw;
    height: 60vw;
  }
`;
