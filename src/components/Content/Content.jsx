import LeftPart from "../LeftPart/LeftPart";
import RightPart from "../RightPart/RightPart";
import { ContentBlock } from "./Content.styled";

const Content = () => {
  return (
    <ContentBlock>
      <LeftPart />
      <RightPart />
    </ContentBlock>
  );
};

export default Content;
