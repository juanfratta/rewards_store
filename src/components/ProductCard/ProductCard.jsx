import { useState } from 'react';

import { ReactComponent as BuyBlue } from '../svgs/Icons/buy-blue.svg';
import { ReactComponent as BuyWhite } from '../svgs/Icons/buy-white.svg';
import { ReactComponent as Coin } from '../svgs/Icons/coin.svg';

import {
  CardHover,
  CardWrapper,
  IconContainer,
  ImageProduct,
  InfoProductContainer,
  PriceContainer,
  RedeemButton,
} from './ProductCard.styled';

const ProductCard = ({ category, cost, image, name }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <CardWrapper
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <CardHover>
            <IconContainer>
              <BuyWhite width="28px" />
            </IconContainer>
            <PriceContainer>
              <p>{cost}</p>
              <Coin />
            </PriceContainer>
            <RedeemButton>Redeem Now</RedeemButton>
          </CardHover>
        )}

        <IconContainer>{!hover && <BuyBlue width="25px" />}</IconContainer>
        <ImageProduct src={image} />
        <InfoProductContainer>
          <p>{category}</p>
          <h6>{name}</h6>
        </InfoProductContainer>
      </CardWrapper>
    </>
  );
};

export default ProductCard;
