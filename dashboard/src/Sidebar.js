import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faChartBar, faUsers } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <nav className="sidebar" aria-label="Main Navigation">
      <FontAwesomeIcon icon={faHome} className="icon" aria-label="Home" />
      <FontAwesomeIcon icon={faCog} className="icon" aria-label="Settings" />
      <FontAwesomeIcon icon={faChartBar} className="icon" aria-label="Charts" />
      <FontAwesomeIcon icon={faUsers} className="icon" aria-label="User Profile" />
    </nav>
  );
};

export default Sidebar;
