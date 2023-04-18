import React from 'react';
import fm from "./../img/fm.png"

function Header() {
  return (
    <React.Fragment>
      <header>
        <h1>this is the header!</h1>
        <img src={fm} alt="A farmers mkt image for the image files" />
      </header>
    </React.Fragment>
  );
}

export default Header;