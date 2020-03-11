import React from 'react';
import Logo from '../../../assets/images/logo.png';

export default function Home() {
  return (
    <div className="home" data-tid="container">
      <div className="home__header">
        <img src={Logo} alt="logo" className="home__header" />
        <h1>XtendOps</h1>
      </div>
    </div>
  );
}
