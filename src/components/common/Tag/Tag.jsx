import { TagWrapper } from "./Tag.styled";

const Tag = ({ text, children }) => {
  return (
    <TagWrapper>
      <p>{text}</p>
      {children}
    </TagWrapper>
  );
};

export default Tag;
