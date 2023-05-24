import React, {FC} from 'react';
import "./style.css";
import Slider from "../Carousel/Slider";
import {useFetch} from "../../hooks/useFetch";
import Loader from "../Utils/Loader";

const SpecialOffer: FC = () => {

  const  { data, error, loading } = useFetch('http://176.99.11.170:4011/offerSlides');

  if(error){
    console.log(error)
  }

  return (
      <section className="special">
        {loading && <Loader />}
        <p className="special__title">Производство композитной арматуры, сетки и армирующих элементов</p>
        {data && <Slider slides={data}/>}
      </section>
  );
};

export default SpecialOffer;