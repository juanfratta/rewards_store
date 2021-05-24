import { TagWrapper } from './Tag.styled';

const Tag = ({ handlerClick, children, name, disabledOnClick }) => {
  return (
    <TagWrapper
      name={name}
      onClick={(e) => {
        !disabledOnClick && handlerClick(e);
      }}
    >
      {children}
    </TagWrapper>
  );
};

export default Tag;
