import React, {FC} from 'react';
import "./style.css";
import Menu from "../MenuBlock/Menu";
import Logo from "../Utils/Logo";
import Contacts from "../Contacts";

const Header: FC = () => {

  return (
      <header className="header">
        <Logo />
        <Contacts />
        <Menu />
      </header>
  );
};

export default Header;