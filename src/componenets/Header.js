import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img
        className='bg-desktop'
        src={require(`../images/bg-header-desktop.svg`).default}
        alt='background'
      />
    </header>
  );
};

export default Header;
