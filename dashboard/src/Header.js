import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCommentDots, faCalendarCheck, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  useEffect(() => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleThumb = document.getElementById('theme-toggle-thumb');
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const userThemePreference = localStorage.getItem('theme');

    const applyTheme = (theme) => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        themeToggleThumb.style.transform = 'translateX(100%)';
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        themeToggleThumb.style.transform = 'translateX(0%)';
        localStorage.setItem('theme', 'light');
      }
    };

    const initTheme = () => {
      if (userThemePreference) {
        applyTheme(userThemePreference);
      } else if (darkModeMediaQuery.matches) {
        applyTheme('dark');
      } else {
        applyTheme('light');
      }
    };

    themeToggle.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        applyTheme('light');
      } else {
        applyTheme('dark');
      }
    });

    initTheme();
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <h1 className="header-title">archimidx</h1>
      </div>
      <div className="header-right">
        <button id="theme-toggle" className="theme-toggle" aria-label="Toggle Theme">
          <div id="theme-toggle-thumb" className="theme-toggle-thumb"></div>
        </button>
        <FontAwesomeIcon icon={faSearch} className="icon" aria-label="Search" />
        <FontAwesomeIcon icon={faCommentDots} className="icon" aria-label="Messages" />
        <FontAwesomeIcon icon={faCalendarCheck} className="icon" aria-label="Calendar" />
        <FontAwesomeIcon icon={faBell} className="icon" aria-label="Notifications" />
        <FontAwesomeIcon icon={faUser} className="icon" aria-label="User Profile" />
      </div>
    </header>
  );
};

export default Header;
