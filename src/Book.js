import './Book.css'
import React, { useState } from 'react'

export function Book(props) {

    const [theme, setTheme] = useState('light');

    const handleThemeChange = (event) => { setTheme(event.target.value)};

    return  <div className={`main ${theme}`}>
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
        <p>{props.text}</p>
    </div>

    
}