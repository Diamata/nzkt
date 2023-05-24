import React, {FC} from 'react';
import "./style.css";
import {INews} from "../../../types/types";
import {Link} from "react-router-dom";

export interface INewsCardProps {
  news: INews
}

const NewsCard: FC<INewsCardProps> = ({news}) => {
  return (
      <div className="newscard">
        <div className="newscard__img">
          <div className="newscard__date">{(new Date).toLocaleDateString()}</div>
          <img src={news.img} alt="current news item illustration"/>
        </div>
        <Link to={news.link} className="newscard__link">{news.title}</Link>
      </div>
  );
};

export default NewsCard;