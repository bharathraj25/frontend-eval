/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../constants/routes';
import { logoName } from '../../constants/strings';
import { ThemeContext } from '../../context/ThemeProvider';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const { themeColor } = useContext(ThemeContext);
  return (
    <div className="header" style={{ 'background-color': themeColor }}>
      <div className="center-padding">
        <span onClick={() => navigate(HOME_ROUTE)}>{logoName}</span>
      </div>
    </div>
  );
}

export default Header;
