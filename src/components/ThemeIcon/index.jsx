/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './ThemeIcon.css';

// eslint-disable-next-line react/prop-types
function ThemeIcon({ id, themeColor, updateTheme }) {
  return (
    <div
      className="theme-icon"
      style={{ 'background-color': themeColor }}
      role="button"
      onClick={() => updateTheme(id)}
    />
  );
}

export default ThemeIcon;
