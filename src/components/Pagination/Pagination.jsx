import { ArrowContainer } from './Pagination.styled';
import { ReactComponent as ArrowLeft } from '../svgs/Icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../svgs/Icons/arrow-right.svg';

const Pagination = ({ handlerClick }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <ArrowContainer>
        <ArrowLeft id={'left'} onClick={(e) => handlerClick(e)} />
      </ArrowContainer>
      <ArrowContainer>
        <ArrowRight id={'right'} onClick={(e) => handlerClick(e)} />
      </ArrowContainer>
    </div>
  );
};

export default Pagination;
