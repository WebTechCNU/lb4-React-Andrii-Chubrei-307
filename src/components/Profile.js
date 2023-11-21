// components/Profile.js
import React from 'react';
import '../styles/Profile.css';

const Profile = ({ handleLogout }) => (
  <div className="profile-container">
    <h2>Профіль</h2>
    <button onClick={handleLogout} className="profile-button">Вийти</button>
  </div>
);

export default Profile;
