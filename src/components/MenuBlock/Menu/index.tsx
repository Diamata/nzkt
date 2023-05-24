import React, {FC, useState} from 'react';
import "./style.css";
import Option from "../MenuOptionComponent";
import {menu} from "../../../utils/menus";

const Menu: FC = () => {

  {/*----------Menu Options List----------*/}

  const [menu_class, setMenuClass] = useState("nav__menu-wrapper hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [chosenClass, setChosenClass] = useState(null);

  {/*----------Toggle burger menu change----------*/}

  const updateMenu = ():void => {
    if (!isMenuClicked) {
      setMenuClass("nav__menu-wrapper visible")
    } else {
      setMenuClass("nav__menu-wrapper hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <nav className="nav" role="navigation">

      {/*----------Burger Menu----------*/}

      <div className="nav__burger-menu" onClick={updateMenu}>
        <span />
        <span />
        <span />
      </div>

      {/*----------Fallout Menu----------*/}

      <div className={menu_class} onClick={updateMenu}>
        <div className={chosenClass === null ? "nav__fallout-menu" : "nav__fallout-menu menu-chosen"}>
          {<Option props={{chosenClass, setChosenClass}} menuOptions={menu}/>}
        </div>
      </div>
    </nav>
  );
};

export default Menu;