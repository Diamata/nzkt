import React, {FC} from 'react';
import "./style.css";
import {FacebookIcon, GoogleIcon, InstagramIcon, TwitterIcon, VkIcon, YoutubeIcon} from "../../utils/svgs";

const Socials: FC = () => {
  return (
      <section className="socials">
        <h3>Мы в социальных медиа</h3>
        <div className="socials__icons">

          <a href="https://vk.com" className="socials__icon"><VkIcon /></a>
          <a href="https://www.facebook.com" className="socials__icon"><FacebookIcon /></a>
          <a href="https://twitter.com/" className="socials__icon"><TwitterIcon /></a>
          <a href="https://www.instagram.com" className="socials__icon"><InstagramIcon /></a>
          <a href="https://www.youtube.com" className="socials__icon"><YoutubeIcon /></a>
          <a href="https://www.google.com/" className="socials__icon"><GoogleIcon /></a>

        </div>
      </section>
  );
};

export default Socials;