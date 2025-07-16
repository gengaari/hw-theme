import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Book } from './Book';
import Lesya from './lesya';
import Franko from './Franko';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <Router>
      <div className={`main ${theme}`}>
        <header>
          <nav className="menu">
            <ul>
              <li><Link to="/">Головна</Link></li>
              <li className="dropdown">
                Поети
                <ul className="submenu">
                  <li><Link to="/shevchenko">Шевченко</Link></li>
                  <li><Link to="/franko">І. Франко</Link></li>
                  <li><Link to="/lesya">Л. Українка</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div id="radio">
            <label>
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={handleThemeChange}
              />
              Dark
            </label>
            <label>
              <input
                type="radio"
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={handleThemeChange}
              />
              Light
            </label>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<h2 className="center">Вітаємо на сайті про українських поетів!</h2>} />
            <Route path="/shevchenko" element={<Book theme={theme} />} />
            <Route path="/franko" element={<Franko />} />
            <Route path="/lesya" element={<Lesya />} />
          </Routes>
        </main>

        <footer className="footer center">
          &copy; 2025. Всі права захищені.
        </footer>
      </div>
    </Router>
  );
}

export default App;