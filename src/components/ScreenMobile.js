import React from 'react';
import Tooltip from "react-simple-tooltip";
import { BrowserRouter, Link } from 'react-router-dom';
import g_play from "../assets/images/google_play.svg";
import app from "../assets/images/app_store.svg";

export default class ScreenMobile extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="ScreenMobile">
          <Tooltip content="google play" placement="top" background="#7c7c7c">
            <Link to="" ><img src={g_play} widht="100" height="50"
              className="ScMobile" alt="google play" />
            </Link>
          </Tooltip>
          <Tooltip content="App store" placement="top" background="#7c7c7c">
            <Link to="" ><img src={app} widht="100" height="50"
              className="ScMobile" alt="app store" />
            </Link>
          </Tooltip>
          <p className="Title2">Continuer sur notre site mobile</p>
        </div>
      </BrowserRouter>
    );
  }
}