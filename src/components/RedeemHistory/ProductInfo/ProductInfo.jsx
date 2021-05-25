import { ProductInfoContainer } from './ProductInfo.styled';

const ProductInfo = ({ name, image, points }) => {
  return (
    <ProductInfoContainer>
      <h5>Product: {name}</h5>
      <img src={image} alt={name} />
      <p>Cost: {points}</p>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
