import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, sortProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Grid, Select } from "./Styled";

export const Products = () => {
  const { isLoading, isError, products } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    getProductsData(dispatch);
  }, [dispatch]);
  const handleSort = (e) => {
    // dispatch sort products on change
    dispatch(sortProducts(e.target.value));
  };
  return (
    <>
      <h2 className="text-center font-bold text-2xl mt-4 underline text-indigo-500">PRODUCTS</h2>
      <Select className="mx-[670px] mt-5 border bg-green-300 outline-none w-[200px]" data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : isError ? (
        <h1>Error.. Something went wrong</h1>
      ) : (
        <Grid data-testid="products-container">
          {/* iterate data and show each POroduct card */}
          {products.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </Grid>
      )}
    </>
  );
};