import { ReactComponent as BuyBlue } from '../svgs/Icons/buy-blue.svg';
import {
  CardWrapper,
  IconContainer,
  ImageProduct,
  InfoProductContainer,
} from './ProductCard.styled';

const ProductCard = ({ category, name, image }) => {
  return (
    <CardWrapper>
      <IconContainer>
        <BuyBlue width="25px" />
      </IconContainer>
      <ImageProduct src={image} />
      <InfoProductContainer>
        <p>{category}</p>
        <h6>{name}</h6>
      </InfoProductContainer>
    </CardWrapper>
  );
};

export default ProductCard;
