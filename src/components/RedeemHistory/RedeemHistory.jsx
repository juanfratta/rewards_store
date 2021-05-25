import { useEffect, useState } from 'react';
import axios from 'axios';

import { BASE_URL, headers } from '../../utils/variables';

import {
  LoaderContainer,
  ProductsContainer,
  UserAccountContainer,
} from './RedeemHistory.styled';
import Loader from '../common/Loader';
import ProductInfo from './ProductInfo';

const RedeemHistory = () => {
  const [items, setItems] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/history`, { headers })
      .then((res) => setItems(res.data.reverse().slice(0, 20)));
  }, []);

  return (
    <UserAccountContainer>
      <h3>Your redeem history</h3>
      <ProductsContainer>
        {!items && (
          <LoaderContainer>
            <Loader size="50px" style={{ margin: '2rem' }} />
            <h3>Loading ... </h3>
          </LoaderContainer>
        )}
        {items &&
          items.map((item, index) => (
            <ProductInfo
              key={index}
              name={item.name}
              image={`${BASE_URL}/${item.img.url.substring(40)}`}
              points={item.cost}
            />
          ))}
      </ProductsContainer>
    </UserAccountContainer>
  );
};

export default RedeemHistory;
