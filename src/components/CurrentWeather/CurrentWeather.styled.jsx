import styled from "styled-components";
import shape from "../../media/svg/shape.svg";
import poster from "../../media/poster-1.jpg";

export const CurrentWeatherStyled = styled.div`
  position: relative;
  border-radius: 0.8vw;
  background-color: teal;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.6vw;
  background-image: url("${poster}");
  background-repeat: no-repeat;
  background-size: cover;
  height: 10vw;
  @media (max-width: 768px) {
    border-radius: 2vw;
    padding: 3vw;
    height: 40vw;
  }
`;

export const TimeBlock = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  border-radius: 0.8vw;
  color: #fff;
  padding: 1vw 1.2vw;
  display: flex;
  align-items: center;
  width: 100%;
  height: 96%;
  @media (max-width: 768px) {
    padding: 3vw 4vw;
    border-radius: 4vw;
  }
`;

export const LeftPartOfTimeBlock = styled.div`
  margin-right: 0.8vw;
  @media (max-width: 768px) {
    margin-right: 3vw;
  }
`;

export const Icon = styled.div`
  width: 4vw;
  height: 4vw;
  position: relative;
  top: -1vw;
  left: -1.2vw;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const City = styled.p`
  font-weight: 275;
  font-size: 1vw;
  width: 8vw;
  @media (max-width: 768px) {
    font-size: 3.2vw;
    width: 32vw;
  }
`;

export const Time = styled.p`
  font-weight: 800;
  font-size: 2vw;
  margin-bottom: 0.2vw;
  & > span {
    font-size: 1vw;
    @media (max-width: 768px) {
      font-size: 4vw;
    }
  }
  @media (max-width: 768px) {
    font-size: 8vw;
    margin-bottom: 2vw;
  }
`;

export const SunRiseDown = styled.p`
  font-weight: 300;
  font-size: 0.8vw;
  margin-top: 0.6vw;
  /* display: flex; */
  & > span {
    display: block;
  }
  & > span:first-child {
    margin-bottom: 0.1vw;
    @media (max-width: 768px) {
      font-size: 3vw;
      margin-right: 2vw;
    }
  }
  @media (max-width: 768px) {
    font-size: 3vw;
    display: block;
  }
`;

export const WeatherBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: url("${shape}");
  background-position: calc(100% + 4.4vw);
  background-repeat: no-repeat;
  background-size: contain;
  padding: 0 1vw 1vw 0;
  border-radius: 0.8vw;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 768px) {
    padding: 0 3vw 3vw 0;
    background-position: calc(100% + 9.4vw);
  }
`;

export const TemperatureInfo = styled.div`
  display: block;
`;

export const Temperature = styled.div`
  text-align: right;
  font-weight: 800;
  font-size: 3vw;
  color: #707070;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > svg {
    width: 1vw;
    margin-right: 0.4vw;
    @media (max-width: 768px) {
      width: 10vw;
      height: 10vw;
      bottom: -0.3vw;
    }
  }
  @media (max-width: 768px) {
    font-size: 12vw;
    margin-bottom: 1vw;
  }
`;

export const Fealing = styled.div`
  text-align: right;
  font-weight: 275;
  font-size: 0.9vw;
  /* line-height: 7px; */
  text-align: right;
  color: #707070;
  margin-bottom: 1.2vw;
  opacity: 0.8;
  @media (max-width: 768px) {
    font-size: 4vw;
    margin-bottom: 2vw;
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: right;
`;

export const List = styled.div`
  display: flex;
  gap: 0.3vw;
  @media (max-width: 768px) {
    gap: 1.4vw;
  }
`;

export const Item = styled.div`
  padding: 0.2vw 0.3vw 0.2vw 0.1vw;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.8vw;
  font-weight: 275;
  font-size: 0.6vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  cursor: pointer;
  user-select: none;
  position: relative;
  &:hover::after {
    content: attr(data);
    position: absolute;
    top: 120%;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    background-color: #ff9900;
    color: #fff;
    padding: 0.2vw 0.4vw;
    border-radius: 0.8vw;
  }
  @media (max-width: 768px) {
    font-size: 2.8vw;
    padding: 1.2vw 1.8vw;
    border-radius: 4vw;
  }
`;
