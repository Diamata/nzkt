import React, {FC} from 'react';
import "./style.css";
import {ISlide} from "../../types/types";
import {DiameterIcon} from "../../utils/svgs";

interface OfferCardProps {
  slide: ISlide
}

const SpecialOfferCard: FC<OfferCardProps> = ({slide}) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <p className="card__offer-title">
          Спрециальное предложение
        </p>
        <p className="card__title">
          {slide.desc}
        </p>
        <div className="card__params-wrapper">
          <DiameterIcon />
          <p className="card__params">{slide.params}</p>
        </div>
        <button className="card__button">Перейти в каталог</button>
      </div>
    </div>
  );
};

export default SpecialOfferCard;