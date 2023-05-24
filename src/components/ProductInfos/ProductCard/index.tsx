import React, {FC} from 'react';
import './style.css';
import {useWindowSize} from "../../../hooks/useWindowSize";

interface IProductCardProps {
  props: {
    id: number;
    title: string;
    imgSm: string;
    imgLg: string
  }[]
}

const ProductCard: FC<IProductCardProps> = ({props}) => {

  const windowWidth = useWindowSize(window.innerWidth)

  return (
      <>
        {
          props.map((product) => (
              <div key={product.id} className="product-card">
                <h4>{product.title}</h4>
                <div className="product-card__img-wrapper">
                  {
                    windowWidth < 576 && <img src={product.imgSm} alt={product.title}/>
                      ||
                    windowWidth >= 576 && <img src={product.imgLg} alt={product.title}/>
                  }
                </div>
              </div>
            )
          )
        }
      </>
  );
};

export default ProductCard;