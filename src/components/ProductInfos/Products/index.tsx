import React, {FC} from 'react';
import "./style.css";
import ProductCard from "../ProductCard";
import Loader from "../../Utils/Loader";
import {useFetch} from "../../../hooks/useFetch";

const Products: FC = () => {

  const  { data, error, loading } = useFetch('http://176.99.11.170:4011/productsList');

  if(error){
    console.log(error)
  }

  return (
      <section className="products">
        <h3>Наша продукция</h3>
        {loading && <Loader />}
        {data &&
        <div className="products__cards">
          <ProductCard props={data}/>
        </div>}
      </section>
  );
};

export default Products;