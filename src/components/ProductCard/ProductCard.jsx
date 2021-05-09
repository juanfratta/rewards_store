import { ReactComponent as BuyBlue } from "../svgs/Icons/buy-blue.svg";
import {
  CardWrapper,
  IconContainer,
  ImageProduct,
  InfoProductContainer,
} from "./ProductCard.styled";

import productImage from "../../images/products/AcerAspire-x1.png";

const ProductCard = () => {
  return (
    <CardWrapper>
      <IconContainer>
        <BuyBlue width="25px" />
      </IconContainer>
      <ImageProduct src={productImage} />
      <InfoProductContainer>
        <p>Category product</p>
        <h6>Aser Aspire</h6>
      </InfoProductContainer>
    </CardWrapper>
  );
};

export default ProductCard;
