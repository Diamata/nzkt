import React, {Dispatch, FC} from 'react';
import "./style.css";
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";
import {IMenuItem} from "../../../types/types";
import {Link} from "react-router-dom";

interface IOptionProps {
  props: {
    chosenClass?: number | null;
    setChosenClass?: Dispatch<React.SetStateAction<number | null>>;
    menuOptions?: IMenuItem[];
  };
  menuOptions: IMenuItem[];
}

const Option: FC <IOptionProps> = ({props: {chosenClass, setChosenClass}, menuOptions}) => {

  const handleClick = (index: number): void => {
    if(chosenClass !== index) {
      setChosenClass(index);
    } else {
      setChosenClass(null)
    }
  }

  return (
      <>
        {menuOptions.map((option: IMenuItem, index: number) => (
            <div key={option.id} onClick={() => handleClick(index)}>
              {chosenClass !== index
                ?
                <Link to={option.link} className={`${chosenClass === index ? "nav__in-list chosen" : "nav__in-list"}`}>
                  <MdOutlineKeyboardArrowLeft className={`${chosenClass === index ? "arrow active" : "arrow"}`}/>
                  <p>{option.name}</p>
                </Link>
                :
                <Link to="/" className={`${chosenClass === index ? "nav__in-list chosen" : "nav__in-list"}`}>
                  <MdOutlineKeyboardArrowLeft className={`${chosenClass === index ? "arrow active" : "arrow"}`}/>
                  <p>{option.name}</p>
                </Link>
              }
            </div>
          ))
        }
      </>
  );
};

export default Option;