import { useContext, useEffect, useState } from 'react';
import { RewardStoreContext } from '../../contexts/context';
import ProductInfo from './ProductInfo';

const RedeemHistory = () => {
  const { user } = useContext(RewardStoreContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let products = user && user.redeemHistory.reverse().slice(0, 20);
    setItems(products);
  }, [user]);

  return (
    <div>
      <h3>Your redeem history:</h3>
      {!user && <h3>Loading</h3>}
      {user &&
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
