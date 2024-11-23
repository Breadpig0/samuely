import React, { useState } from 'react';
import './LogIn.css'; // Importing the CSS file for styling

const Login = () => {
  const [hardcodedPassword, setHardcodedPassword] = useState('password123');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === hardcodedPassword) {
      setIsLoggedIn(true);
      setMessage('Successfully logged in!');
    } else {
      setMessage('Incorrect password. Please try again.');
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setHardcodedPassword(newPassword);
    setNewPassword('');
    setIsChangingPassword(false);
    setMessage('Password changed successfully.');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setMessage('Logged out.');
  };

  return (
    <div className="login-container mt-4">
      <h2>{isLoggedIn ? 'Welcome!' : 'Login'}</h2>
      {message && <p className="message">{message}</p>}
      {!isLoggedIn && (
        <form onSubmit={isChangingPassword ? handleChangePassword : handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={isChangingPassword}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">{isChangingPassword ? 'New Password:' : 'Password:'}</label>
            <input
              type={isChangingPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={isChangingPassword ? newPassword : password}
              onChange={(e) => (isChangingPassword ? setNewPassword(e.target.value) : setPassword(e.target.value))}
              required
            />
          </div>
          <button type="submit" className="btn-submit">{isChangingPassword ? 'Change Password' : 'Login'}</button>
        </form>
      )}
      {isLoggedIn && (
        <div>
          <button onClick={() => setIsChangingPassword(!isChangingPassword)} className="btn-change-password">
            {isChangingPassword ? 'Cancel' : 'Change Password'}
          </button>
          <button onClick={handleLogout} className="btn-logout mt-4">Logout</button>
        </div>
      )}
    </div>
  );
};

export default Login;
