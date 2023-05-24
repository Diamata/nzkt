import React from 'react';
import SpecialOffer from "../components/SpecialOffer";
import Products from "../components/ProductInfos/Products";
import VideoComponent from "../components/VideoComponent";
import UniqueOffers from "../components/UniqueOffers";
import News from "../components/NewsBlock/News";
import InfoBlock from "../components/InfoBlock/InfoSection";
import Socials from "../components/Socials";

const Home = () => {
  return (
    <>
      <SpecialOffer />
      <Products />
      <VideoComponent />
      <UniqueOffers />
      <News />
      <InfoBlock />
      <Socials />
    </>
  );
};

export default Home;