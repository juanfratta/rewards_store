import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../contexts/products/context';

import { MainWrapper, MenuWrapper, ProductsWrapper } from './Main.styled';
import { ProductCard, Menu, Pagination } from '../../components';
import Counter from '../common/Counter';

const Main = () => {
  const { loading_products, products, error_products, getProducts } =
    useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);

  const totalProducts = products.length;
  const productsPerPage = 16;

  const indexOfLastproduct = currentPage * productsPerPage;
  const indexOfFirstproduct = indexOfLastproduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstproduct,
    indexOfLastproduct
  );

  const handlerPagination = (e) => {
    const totalPages = totalProducts / productsPerPage;

    e.target.id === 'right'
      ? currentPage < totalPages && setCurrentPage(currentPage + 1)
      : currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <MainWrapper>
      <Menu handlerClick={handlerPagination} />
      <ProductsWrapper>
        {loading_products && <h3>Loading...</h3>}
        {currentProducts &&
          currentProducts.map((product) => (
            <ProductCard
              key={product._id}
              category={product.category}
              name={product.name}
              image={product.img.url}
            />
          ))}
        {error_products && <h3>Error al cargar los productos</h3>}
      </ProductsWrapper>
      <MenuWrapper>
        <Counter>{`Products: ${productsPerPage} of ${totalProducts}`}</Counter>
        <Pagination handlerClick={handlerPagination} />
      </MenuWrapper>
    </MainWrapper>
  );
};

export default Main;
