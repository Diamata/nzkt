import React from 'react';
import "./style.css";
import NewsCard from "../NewsCard";
import {Link} from "react-router-dom";
import {INews} from "../../../types/types";
import {useFetch} from "../../../hooks/useFetch";
import Loader from "../../Utils/Loader";

const News = () => {

  const  { data, error, loading } = useFetch('http://176.99.11.170:4011/news');

  if(error){
    console.log(error)
  }

  return (
      <section className="news">
        <div className="news__top">
          <h3>Новости компании</h3>
          <Link to="/news"><button>Все новости</button></Link>
        </div>

        <div className="news__cards">
          {loading && <Loader />}
          {data &&
            data.map((item: INews) => (
                <NewsCard key={item.id} news={item} />
              )
            )
          }
        </div>
      </section>
  );
};

export default News;