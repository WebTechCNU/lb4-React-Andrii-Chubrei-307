// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import HomeComponent from './components/Home';
import NewsComponent from './components/News';
import ProfileComponent from './components/Profile';
import LoginComponent from './components/Login';
import Nav from './components/Nav';

// Визначте fakeCredentials тут
const fakeCredentials = {
  username: 'Admin',
  password: '12345',
};

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === fakeCredentials.username && password === fakeCredentials.password) {
      setLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      setError('Ім\'я користувача або пароль введені не вірно');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <Router>
      <div>
        {/* Використовуйте компонент Nav тут */}
        <Nav isLoggedIn={isLoggedIn} />
        
        <hr />

        {/* Використовуйте Switch для забезпечення тільки одного вибору маршруту */}
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/news" component={NewsComponent} />
          <Route
            path="/profile"
            render={() =>
              isLoggedIn ? (
                <ProfileComponent handleLogout={handleLogout} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/login"
            render={() =>
              isLoggedIn ? (
                <Redirect to="/profile" />
              ) : (
                <LoginComponent
                  username={username}
                  password={password}
                  error={error}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  setError={setError}
                  handleLogin={handleLogin}
                />
              )
            }
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
