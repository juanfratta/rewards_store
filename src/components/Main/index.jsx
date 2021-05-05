import Media from "react-media";

import { ReactComponent as Arrow } from "../svgs/Icons/arrow-right.svg";
import Tag from "../common/Tag";
import "./index.css";
import {
  Counter,
  MainWrapper,
  MenuWrapper,
  ProductsWrapper,
  TagsWrapper,
} from "./Main.styled";

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

        <Arrow width="34px" height="34px" />
      </MenuWrapper>
      <ProductsWrapper>
        <div className="item">Producto 1</div>
        <div className="item">Producto 2</div>
        <div className="item">Producto 3</div>
        <div className="item">Producto 4</div>
        <div className="item">Producto 5</div>
        <div className="item">Producto 6</div>
        <div className="item">Producto 7</div>
        <div className="item">Producto 8</div>
        <div className="item">Producto 9</div>
        <div className="item">Producto 10</div>
        <div className="item">Producto 11</div>
        <div className="item">Producto 12</div>
        <div className="item">Producto 13</div>
        <div className="item">Producto 14</div>
        <div className="item">Producto 15</div>
        <div className="item">Producto 16</div>
      </ProductsWrapper>
    </MainWrapper>
  );
};

export default Main;
