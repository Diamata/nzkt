import React, {FC} from 'react';
import "./style.css";
import logo from '../../../assets/icons/logo.png'
import {Link} from "react-router-dom";

const Logo: FC = () => {

  return (
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="N3K logo"/>
        </div>
      </Link>
  );
};

export default Logo;