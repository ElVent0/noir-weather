import styled from "styled-components";

export const ContentBlock = styled.div`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  /* flex-direction: row; */
  @media (max-width: 768px) {
    display: block;
    top: 5%;
    transform: translate(-50%, 0);
    width: 90%;
    padding: 0 0 10vw 0;
  }
`;
