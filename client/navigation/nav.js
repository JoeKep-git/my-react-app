// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/pizza">Pizza</Link>
    </nav>
  );
}

export default NavBar;
