import React from 'react';
import '../assets/css/App.css';
import avatar from "../assets/images/icon_avatar.png";
import address from "../assets/images/icon_address.png";
import email from "../assets/images/icon_email.png";
import facebook from "../assets/images/logo_facebook.png";
import twitter from "../assets/images/logo_twitter.png";
import instagram from "../assets/images/logo_instagram.png";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div>
          <h2>Contact :</h2>
          <ul id="contact">
            <li><img src={avatar} alt="Icone d'avatar"/><address>fusséeline</address></li>
            <li><img src={address} alt="Icone d'adresse"/><address>75014 PARIS</address></li>
            <li><img src={email} alt="Icone d'email"/><address>hakima.chapron@epitech.eu</address></li>
          </ul>
        </div>
        <div id="footer_middle">
          <p id="footer_text">Web@cademie - Ambition Féminine - 2020</p>
        </div>
        <div>
          <h2 id="social_title">Nos réseaux sociaux :</h2>
          <ul id="social">
            <li><img src={facebook} alt="Logo facebook"/></li>
            <li><img src={twitter} alt="Logo twitter"/></li>
            <li><img src={instagram} alt="Logo instagram"/></li>
          </ul>
        </div>
      </div>
    );
  }
}