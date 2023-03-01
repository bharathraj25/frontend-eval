import React, { useContext } from 'react';
import { logoName } from '../../constants/strings';
import { ThemeContext } from '../../context/ThemeProvider';
import './Header.css';

function Header() {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div className="header" style={{ 'background-color': themeColor }}>
      <div className="center-padding">
        <span>{logoName}</span>
      </div>
    </div>
  );
}

export default Header;
