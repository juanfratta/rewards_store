import { useCallback, useContext, useEffect, useState } from 'react';
import { RewardStoreContext } from '../../contexts/context';

import {
  MainWrapper,
  MenuWrapper,
  ProductsWrapper,
} from './ProductsList.styled';
import { ProductCard, Menu, Pagination } from '..';
import Counter from '../common/Counter';

import SkeletonCardList from './SkeletonCardList';

const ProductsList = () => {
  const { getProducts, loading_products, products, error_products } =
    useContext(RewardStoreContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [productsPerPageState, setProductsPerPageState] = useState([]);

  const totalProducts = products.length;
  const productsPerPage = 16;
  const indexOfLastproduct = currentPage * productsPerPage;
  const indexOfFirstproduct = indexOfLastproduct - productsPerPage;
  const totalPages = totalProducts / productsPerPage;

  //get products from api
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  //set products in local state
  useEffect(() => {
    setCurrentProducts(products);
  }, [products]);

  const productsPageCallBack = useCallback(() => {
    const productsPage = currentProducts.slice(
      indexOfFirstproduct,
      indexOfLastproduct
    );
    setProductsPerPageState(productsPage);
  }, [currentProducts, indexOfFirstproduct, indexOfLastproduct]);

  useEffect(() => {
    productsPageCallBack();
  }, [productsPageCallBack]);

  const pagination = (e) => {
    e.target.id === 'right'
      ? currentPage < totalPages && setCurrentPage(currentPage + 1)
      : currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  const sortByCost = (e) => {
    const byPrice =
      e.target.name === 'lower-price'
        ? currentProducts.sort((a, b) => {
            return a.cost - b.cost;
          })
        : currentProducts.sort((a, b) => {
            return b.cost - a.cost;
          });
    setCurrentProducts(byPrice);
    productsPageCallBack();
  };

  return (
    <>
      <MainWrapper>
        <Menu
          handlerByCost={sortByCost}
          handlerPagination={pagination}
          productsPerPage={productsPerPage}
          totalProducts={totalProducts}
        />

        <ProductsWrapper>
          {loading_products && <SkeletonCardList />}

          {productsPerPageState &&
            productsPerPageState.map((product) => (
              <ProductCard
                key={product._id}
                productId={product._id}
                category={product.category}
                name={product.name}
                image={product.img.url}
                cost={product.cost}
              />
            ))}

          {error_products && <h3>Error al cargar los productos</h3>}
        </ProductsWrapper>
        <MenuWrapper>
          <Counter>{`Products: ${productsPerPage} of ${totalProducts}`}</Counter>
          <Pagination />
        </MenuWrapper>
      </MainWrapper>
    </>
  );
};

export default ProductsList;
