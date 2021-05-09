import Media from "react-media";

import { ReactComponent as ArrowRight } from "../svgs/Icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../svgs/Icons/arrow-left.svg";

import { ProductCard } from "../../components";
import Tag from "../common/Tag";

import {
  MainWrapper,
  MenuWrapper,
  ProductsWrapper,
  TagsWrapper,
} from "./Main.styled";
import Counter from "../common/Counter";

const Main = () => {
  return (
    <MainWrapper>
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
                {" "}
                Sort By: <br />
                <select style={{ color: "#A3A3A3" }}>
                  <option value="">Most Recent</option>
                  <option value="">Lower Price</option>
                  <option value="">Highest Price</option>
                </select>
              </div>
            )
          }
        </Media>
        <ArrowRight width="48px" height="48px" />
      </MenuWrapper>
      <ProductsWrapper>
        <ProductCard />
      </ProductsWrapper>
      <MenuWrapper>
        <Counter>Products: 16 of 32</Counter>
        <div>
          <ArrowLeft width="48px" height="48px" />{" "}
          <ArrowRight width="48px" height="48px" />
        </div>
      </MenuWrapper>
    </MainWrapper>
  );
};

export default Main;
