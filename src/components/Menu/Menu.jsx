import Media from 'react-media';

import { MenuWrapper, TagsWrapper, Select } from './Menu.styled';
import { Pagination } from '..';
import Counter from '../common/Counter';
import Tag from '../common/Tag';

const Menu = ({
  totalProducts,
  productsPerPage,
  handlerByCost,
  handlerPagination,
}) => {
  return (
    <MenuWrapper>
      <Counter>{`Products: ${productsPerPage} of ${totalProducts}`}</Counter>

      <Media query="(min-width: 720px)">
        {(matches) =>
          matches ? (
            <TagsWrapper>
              <span>Sort By:</span>
              <Tag name="lower-price" handlerClick={handlerByCost}>
                Lower Price
              </Tag>
              <Tag name="highest price" handlerClick={handlerByCost}>
                Highest Price
              </Tag>
            </TagsWrapper>
          ) : (
            <div>
              Sort By: <br />
              <Select>
                <option onClick={handlerByCost}>Lower Price</option>
                <option onClick={handlerByCost}>Highest Price</option>
              </Select>
            </div>
          )
        }
      </Media>
      <Pagination
        handlerClick={handlerPagination}
        productsPerPage={productsPerPage}
        totalProducts={totalProducts}
      />
    </MenuWrapper>
  );
};

export default Menu;
