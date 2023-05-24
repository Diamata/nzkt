import React, {FC} from 'react';
import "./style.css";
import Logo from "../Utils/Logo";
import Contacts from "../Contacts";
import logoFull from "../../assets/icons/logo-full.png";

const Footer:FC = () => {
  return (
      <footer className="footer">
        <div className="footer__headSm">
          <Logo/>
          <Contacts />
        </div>
        <img className="footer__logo_big" src={logoFull} alt="Full Narmida logo"/>
        <p className="footer__text">Компания “ТД Нармида” является единственным торговым представителем завода НЗК</p>
      </footer>
  );
};

export default Footer;