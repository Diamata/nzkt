import React, {FC, useState} from 'react';
import "./style.css";
import {IMenuItem} from "../../../types/types";
import { NavLink } from "react-router-dom";
import {menu} from "../../../utils/menus";

const MenuLg: FC = () => {

  const [isChosen, setIsChosen] = useState<number | null>(null);

  const hoverOn = (index: number): void => {
    setIsChosen(index)
  }

  const hoverOut = (): void => {
    setIsChosen(null);
  }

  return (
    <nav className="menuLg" role="navigation">
      <div className="menuLg__menu-item-list">
        <div className="menuLg__burger">
          <span />
          <span />
          <span />
        </div>
        {menu.map((option: IMenuItem, index: number) => (
            <div className="menuLg__menu-item" key={option.id} onMouseEnter={() => hoverOn(index)} onMouseLeave={hoverOut}>
              <NavLink to={option.link}>{option.name}</NavLink>
              {option.children &&
              (
                <div className={isChosen === index ? "menuLg__second active" : "menuLg__second"} style={{left: `${index * 18.32}rem`}}>
                  {option.children.map(child => (
                      <NavLink to={child.link} key={child.id}><div className="menuLg__menu-item-second">{child.name}</div></NavLink>
                  ))
                  }
                </div>
              )}
              </div>
          ))
        }
      </div>
    </nav>
  );
};

export default MenuLg;