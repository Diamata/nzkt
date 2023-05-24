import React, {FC, useState} from 'react';
import "./style.css";
import {ISlide} from "../../../types/types";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import SliderItem from "../SliderItem";

interface ISliderProps {
  slides: ISlide[]
}

const Slider: FC<ISliderProps> = ({slides}) => {

  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrev = ():void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = ():void => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex: number):void => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="slider">

      {/*----------Slider Item----------*/}

      <div className="slider__inner" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
        <SliderItem slides={slides} />
      </div>

      {/*----------Pagination----------*/}

      <div className="slider__navigation">
        <MdKeyboardArrowLeft className="slider__arrow" onClick={goToPrev}/>
        <div className="slider__pagination">
          {slides.map((slide, slideIndex) => (
            <span className={currentIndex === slideIndex ? 'active' : ''} key={slideIndex} onClick={() => goToSlide(slideIndex)}/>
          ))}
        </div>
        <MdKeyboardArrowRight className="slider__arrow" onClick={goToNext}/>
      </div>
    </div>
  );
};

export default Slider;