import { useContext, useState } from 'react';
import axios from 'axios';
import { RewardStoreContext } from '../../contexts/context';
import { BASE_URL, headers } from '../../utils/variables';

import Tag from '../common/Tag';
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
import ProductModal from './productModal';
import Loader from '../common/Loader';

const ProductCard = ({ category, cost, image, name, productId }) => {
  const { points } = useContext(RewardStoreContext);
  const [hover, setHover] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [loadRedeem, setLoadRedeem] = useState(false);
  const [redeem, setRedeem] = useState('');

  const handlerRedeem = async () => {
    setShowModal(true);
    setLoadRedeem(true);

    let body = { productId: productId };
    await axios
      .post(`${BASE_URL}/redeem`, body, { headers })
      .then((res) => setRedeem(res.data.message))
      .catch((error) => setRedeem('Error: no redeem product'));

    setLoadRedeem(false);
  };

  return (
    <>
      <CardWrapper
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {showModal && (
          <ProductModal
            isOpen={showModal}
            showModal={setShowModal}
            image={image}
            name={name}
            loadRedeem={loadRedeem}
            redeem={redeem}
          />
        )}
        {hover && (
          <CardHover>
            <IconContainer>
              <BuyWhite width="28px" />
            </IconContainer>
            <PriceContainer>
              <p>{cost}</p>
              <Coin />
            </PriceContainer>
            <RedeemButton onClick={(e) => handlerRedeem(e)}>
              Redeem Now
            </RedeemButton>
          </CardHover>
        )}

        <IconContainer>
          {!points && <Loader size="25px" />}
          {!hover && points > cost && <BuyBlue width="25px" />}
          {!hover && points < cost && (
            <Tag name={'onlyTag'} disabledOnClick={true}>
              <span>{cost - points}</span>
              <Coin width="15px" />
            </Tag>
          )}
        </IconContainer>
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
