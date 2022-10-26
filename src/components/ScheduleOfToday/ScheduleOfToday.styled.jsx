import styled from "styled-components";

export const ScheaduleBlock = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.8vw;
  width: 100%;
  padding: 0.6vw;
  /* height: 16vw; */
`;

export const ScheaduleBlockContent = styled.div`
  display: flex;
`;

export const Description = styled.div`
  margin-right: 0.6vw;
  /* width: 10%; */
  flex-grow: 1;
`;

export const Paragraph = styled.p`
  font-weight: 700;
  font-size: 3vw;
  /* line-height: 31px; */
  text-align: right;
  color: #707070;
  margin-bottom: 0.8vw;
`;

export const ListDescription = styled.ul``;

export const ItemDescription = styled.li`
  font-weight: 275;
  font-size: 1vw;
  /* line-height: 12px; */
  text-align: right;
  color: #707070;
  margin-bottom: 0.4vw;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Data = styled.div`
  /* width: 78%; */

  margin-left: 0.6vw;
`;

export const ListData = styled.ul`
  display: flex;
  width: 100%;
  gap: 1vw;
`;
