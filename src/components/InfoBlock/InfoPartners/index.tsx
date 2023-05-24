import React from 'react';
import "./style.css";
import gazprom from "../../../assets/icons/partners/gazprom.png";
import lukoil from "../../../assets/icons/partners/lukoil.png";
import rosatom from "../../../assets/icons/partners/rosatom.png";
import rosnano from "../../../assets/icons/partners/rosnano.png";
import rosneft from "../../../assets/icons/partners/rosneft.png";
import sibur from "../../../assets/icons/partners/sibur.png";
import technonikole from "../../../assets/icons/partners/technonikole.png";
import tatneft from "../../../assets/icons/partners/tatneft.png";

const InfoPartners = () => {
  return (
      <div className="info__partners">

        <div className="info__img-wrapper">
          <img src={gazprom} alt="Газпром"/>
        </div>

        <div className="info__img-wrapper">
          <img src={lukoil} alt="Лукойл"/>
        </div>

        <div className="info__img-wrapper">
          <img src={rosatom} alt="Росатом"/>
        </div>

        <div className="info__img-wrapper">
          <img src={rosnano} alt="Роснано"/>
        </div>

        <div className="info__img-wrapper">
          <img src={rosneft} alt="Роснефть"/>
        </div>

        <div className="info__img-wrapper">
          <img src={sibur} alt="Сибур"/>
        </div>

        <div className="info__img-wrapper">
          <img src={technonikole} alt="ТехноНиколь"/>
        </div>

        <div className="info__img-wrapper">
          <img src={tatneft} alt="Татнефть"/>
        </div>

      </div>
  );
};

export default InfoPartners;