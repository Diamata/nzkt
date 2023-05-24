import React from 'react';
import NewsCard from "../../NewsBlock/NewsCard";
import {useFetch} from "../../../hooks/useFetch";
import Loader from "../../Utils/Loader";

//There is no design for this part, so in order to save time, the NewsCards were inserted as testimonials

const InfoTestimonials = () => {

  const  { data, error, loading } = useFetch('http://176.99.11.170:4011/news');

  if(error){
    console.log(error)
  }

  return (
    <div style={{
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "5rem"
    }}>
      {loading && <Loader />}
      {data &&
        <div
            style={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              columnGap: "3.5rem"
            }}
        >
          <NewsCard news={data[0]}/>
          <NewsCard news={data[1]}/>
        </div>
      }
    </div>
  );
};

export default InfoTestimonials;