import React, {useState} from 'react';
import "./style.css";
import {NavLink, Outlet} from "react-router-dom";
import InfoPartners from "../InfoPartners";

interface IInfoItem {
  id: number;
  desc: string;
  link: string;
}

const menuItems: IInfoItem[] = [
  {
    "id": 1,
    "desc": "Партнеры",
    "link": "/partners"
  },
  {
    "id": 2,
    "desc": "Отзывы",
    "link": "/testimonials"
  },
  {
    "id": 3,
    "desc": "Контакты",
    "link": "/contact-us"
  }
];

const InfoBlock = () => {

  const [chosenMenu, setChosenMenu] = useState(0);
  const [isActive, setIsActive] = useState("active");

  const handleClick = (index: number): void => {
    if(chosenMenu !== index) {
      setChosenMenu(index);
      index !== 0 ? setIsActive("") : setIsActive("active")
    } else {
      setChosenMenu(0)
    }
  }

  return (
      <section className="info">
        <div className="info__sections">
          {menuItems.map((item: IInfoItem, index: number) => (
              <NavLink key={item.id} className={index === 0 ? isActive : ""} onClick={() => handleClick(index)} to={item.link}>{item.desc}</NavLink>
            ))
          }
        </div>

        {/*"Partners" block is always shown unless other block is chosen*/}

        {chosenMenu === 0 || chosenMenu === null ? <InfoPartners/> : <Outlet/>}

      </section>
  );
};

export default InfoBlock;