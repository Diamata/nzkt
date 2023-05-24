import React, {FC} from 'react';
import "./style.css"

interface IUniqueOffers {
  img: string;
  titleMain: string;
  titleSecondary: string;
  buttonTitle: string;
}

const UniqueOfferCard: FC<IUniqueOffers> = (offer) => {

  return (
      <div className="uniqueOfferCard">
        <img src={offer.img} alt="A picture of a percent sign"/>
        <div className="uniqueOfferCard__texts">
          <p className="uniqueOfferCard__title">{offer.titleMain}</p>
          <p className="uniqueOfferCard__second-title">{offer.titleSecondary}</p>
          <div role="button" className="uniqueOfferCard__button">{offer.buttonTitle}</div>
        </div>
      </div>
  );
};

export default UniqueOfferCard;