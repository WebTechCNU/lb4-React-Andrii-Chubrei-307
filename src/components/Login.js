// components/Login.js
import React from 'react';
import '../styles/Login.css';

const Login = ({ username, password, error, setUsername, setPassword, setError, handleLogin }) => (
  <div className="login-container">
    <h2>Вхід</h2>
    <div>
      <label className="login-label">Ім'я користувача:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
    </div>
    <div>
      <label className="login-label">Пароль:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
    </div>
    {error && <p className="login-error">{error}</p>}
    <button onClick={handleLogin} className="login-button">Увійти</button>
  </div>
);

export default Login;
