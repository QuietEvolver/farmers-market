import React from 'react';
import fm from "./../img/fm.png"
import tomatoImg from "./../img/tomato.png";

function Header() {
  return (
    <React.Fragment>
      <header>
        <h1>this is the header!</h1>
        <img className="header-tomato" src={tomatoImg} alt="A farmers mkt logo for the image files" />
      </header>
    </React.Fragment>
  );
}

export default Header;