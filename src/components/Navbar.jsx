import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [setMode] = useDarkMode()
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    setMode()
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
