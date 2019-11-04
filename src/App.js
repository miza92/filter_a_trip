import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import BodyData from './components/BodyData.js';
import ScreenMobile from './components/ScreenMobile.js';

export default class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Header />
      <BodyData />
      <ScreenMobile />
      <Footer /> 
    </div>
  );
}
}
