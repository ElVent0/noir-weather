import styled from "styled-components";

export const LeftPartStyled = styled.div`
  width: 30%;
  /* height: 100%; */
  margin-right: 0.6vw;
  flex-grow: 1;
`;

export const FormBlock = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.8vw;
  height: 2vw;
  margin-bottom: 0.6vw;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.8vw;
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
`;

export const TodayBlock = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.8vw;
  padding: 0.6vw;
  height: calc(100% - 2.5vw);
`;
