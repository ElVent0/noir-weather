import styled from "styled-components";

export const ScheaduleBlock = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.8vw;
  width: 100%;
  padding: 0.6vw;
  /* height: 16vw; */
  @media (max-width: 768px) {
    border-radius: 4vw;
    padding: 3vw;
  }
`;

export const ScheaduleBlockContent = styled.div`
  display: flex;
`;

export const Description = styled.div`
  margin-right: 0.6vw;
  flex-grow: 1;
  @media (max-width: 768px) {
    margin-right: 0vw;
    /* flex-grow: 1; */
  }
`;

export const Paragraph = styled.p`
  font-weight: 700;
  font-size: 3vw;
  /* line-height: 31px; */
  text-align: right;
  color: #707070;
  margin-bottom: 0.8vw;
  @media (max-width: 768px) {
    font-size: 8vw;
    margin-bottom: 8.2vw;
  }
`;

export const ListDescription = styled.ul``;

export const ItemDescription = styled.li`
  font-weight: 275;
  font-size: 1vw;
  text-align: right;
  color: #707070;
  margin-bottom: 0.4vw;
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    font-size: 3vw;
    margin-bottom: 3vw;
    & > b {
      display: none;
    }
  }
`;

export const Data = styled.div`
  margin-left: 0.6vw;
  @media (max-width: 768px) {
    padding-left: 0vw;
    overflow-x: scroll;
    margin-left: 2vw;
    border-radius: 4vw;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const ListData = styled.ul`
  display: flex;
  width: 100%;
  gap: 1vw;
  @media (max-width: 768px) {
    gap: 2vw;
  }
`;
