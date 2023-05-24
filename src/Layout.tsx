import React, {FC} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PreFooter from "./components/PreFooter";
import {Outlet} from "react-router-dom";
import MenuLg from "./components/MenuBlock/MenuLg";

const Layout: FC = () => {
  return (
      <>
        <Header/>
        <MenuLg/>
        <main>
          <Outlet />
        </main>
        <PreFooter />
        <Footer/>
      </>
  );
};

export default Layout;