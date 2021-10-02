import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/product">
          Product
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </div>
      <div className="header__center">
        <Link className="logo" to="/">
          OFF~COURSE
        </Link>
      </div>
      <div className="header__right">
        <Link className="link" to="/SignIn">
          Sign In
        </Link>
        <Link className="link" to="/Cart">
          Cart
        </Link>
        <Link className="link" to="/Search">
          Search
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
