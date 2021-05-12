import { ReactComponent as ArrowLeft } from '../svgs/Icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../svgs/Icons/arrow-right.svg';

const Pagination = ({ handlerClick }) => {
  return (
    <div>
      <ArrowLeft
        width="48px"
        height="48px"
        id="left"
        onClick={(e) => handlerClick(e)}
      />{' '}
      <ArrowRight
        width="48px"
        height="48px"
        id="right"
        onClick={(e) => handlerClick(e)}
      />
    </div>
  );
};

export default Pagination;
