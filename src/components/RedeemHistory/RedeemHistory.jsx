import { useEffect, useState } from 'react';
import axios from 'axios';

import { BASE_URL, headers } from '../../utils/variables';
import ProductInfo from './ProductInfo';
import Loader from '../common/Loader';

const RedeemHistory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/history`, { headers })
      .then((res) => setItems(res.data.reverse().slice(0, 20)));
  }, []);

  return (
    <div>
      {console.log(items)}
      <h3>Your redeem history:</h3>
      {!items === [] && <span>loading</span>}
      {items &&
        items.map((item, index) => (
          <ProductInfo
            key={index}
            name={item.name}
            image={`https://coding-challenge-api.aerolab.co/${item.img.url.substring(
              40
            )}`}
            points={item.cost}
          />
        ))}
    </div>
  );
};

export default RedeemHistory;
