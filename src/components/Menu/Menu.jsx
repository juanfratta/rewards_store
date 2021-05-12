import Media from 'react-media';

import { MenuWrapper, TagsWrapper } from './Menu.styled';
import { Pagination } from '..';
import Counter from '../common/Counter';
import Tag from '../common/Tag';

const Menu = ({ handlerClick }) => {
  return (
    <MenuWrapper>
      <Counter>Products: 16 of 32</Counter>

      <Media query="(min-width: 720px)">
        {(matches) =>
          matches ? (
            <TagsWrapper>
              <span>Sort By:</span>
              <Tag>Most Recent</Tag>
              <Tag>Lower Price</Tag>
              <Tag>Highest Price</Tag>
            </TagsWrapper>
          ) : (
            <div>
              {' '}
              Sort By: <br />
              <select style={{ color: '#A3A3A3' }}>
                <option value="">Most Recent</option>
                <option value="">Lower Price</option>
                <option value="">Highest Price</option>
              </select>
            </div>
          )
        }
      </Media>
      <Pagination handlerClick={handlerClick} />
    </MenuWrapper>
  );
};

export default Menu;
