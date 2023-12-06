import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/grp">Grupa</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
