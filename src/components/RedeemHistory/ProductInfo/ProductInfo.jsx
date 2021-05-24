const ProductInfo = ({ name, image, points }) => {
  return (
    <div>
      <h5>Product: {name}</h5>
      <img src={image} alt={name} />
      <p>Cost: {points}</p>
    </div>
  );
};

export default ProductInfo;
