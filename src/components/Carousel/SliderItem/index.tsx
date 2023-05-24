import React, {FC} from 'react';
import "./style.css";
import SpecialOfferCard from "../../SpecialOfferCard";
import {ISlide} from "../../../types/types";

interface SliderProps {
  slides: ISlide[]
}

const SliderItem: FC<SliderProps> = ({slides}) => {

  return (
    <>
      {
        slides.map((slide: ISlide) => (
          <div key={slide.id} className="sliderItem">
            <div className="sliderItem__offer">
              <div className="sliderItem__offer-img">
                <img src={slide.url} alt={slide.title}/>
              </div>

              <SpecialOfferCard slide={slide}/>
            </div>
          </div>
          )
        )
      }
    </>
  );
};

export default SliderItem;