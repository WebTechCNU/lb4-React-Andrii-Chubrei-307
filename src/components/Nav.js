// components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'; // Змінено шлях

const Nav = ({ isLoggedIn }) => (
  <div className="nav-container">
    <ul className="nav-list">
      <li className="nav-item"><Link to="/">Головна</Link></li>
      <li className="nav-item"><Link to="/news">Новини</Link></li>
      {isLoggedIn ? (
        <li className="nav-item"><Link to="/profile">Профіль</Link></li>
      ) : (
        <li className="nav-item"><Link to="/login">Вхід</Link></li>
      )}
    </ul>
  </div>
);

export default Nav;
