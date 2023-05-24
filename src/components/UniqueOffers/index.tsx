import React from 'react';
import "./style.css";
import UniqueOfferCard from "../UniqueOfferCard";
import {useFetch} from "../../hooks/useFetch";
import Loader from "../Utils/Loader";

const UniqueOffers = () => {

  const  { data, error, loading } = useFetch('http://176.99.11.170:4011/uniqueOffers');

  if(error){
    console.log(error)
  }

  return (
      <section className="offers">
        {loading && <Loader />}
        <p>Уникальные предложения</p>
        {data &&
          <>
            <UniqueOfferCard img={data[0].img} titleMain={data[0].titleMain} titleSecondary={data[0].titleSecondary} buttonTitle={data[0].buttonTitle}/>
            <UniqueOfferCard img={data[1].img} titleMain={data[1].titleMain} titleSecondary={data[1].titleSecondary} buttonTitle={data[1].buttonTitle}/>
          </>
        }
      </section>
  );
};

export default UniqueOffers;