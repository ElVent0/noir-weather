import styled from "styled-components";

export const LeftPartStyled = styled.div`
  width: 30%;
  /* height: 100%; */
  margin-right: 0.6vw;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormBlock = styled.div`
  /* background-color: #fff; */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8vw;
  height: 2vw;
  margin-bottom: 0.6vw;
  @media (max-width: 768px) {
    height: 10vw;
    margin-bottom: 4vw;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 768px) {
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 8vw;
  border: none;
  padding: 0 1.2vw;
  font-weight: 400;
  font-size: 1vw;
  /* line-height: 17px; */
  &::placeholder {
    color: rgba(112, 112, 112, 0.4);
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 4vw;
    padding: 0 4vw;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2vw;
  height: 2vw;
  border-radius: 0.8vw;
  background-color: transparent;
  border: none;
  cursor: pointer;
  & > svg {
    width: 1.6vw;
    height: 1.6vw;
    border-radius: 0.8vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(112, 112, 112, 0.4);
    transition: all 0.3s;
    &:hover {
      color: rgba(112, 112, 112, 0.8);
    }
  }
  @media (max-width: 768px) {
    width: 10vw;
    height: 10vw;
    border-radius: 4vw;
    & > svg {
      width: 8vw;
      height: 8vw;
      border-radius: 4vw;
      /* color: ; */
    }
  }
`;

export const TodayBlock = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.8vw;
  padding: 0.6vw;
  /* height: calc(100% - 2.5vw); */
  @media (max-width: 768px) {
    border-radius: 4vw;
    padding: 3vw;
    margin-bottom: 0vw;
  }
`;
