import React, { useContext } from 'react';
import './Footer.css';
import ThemeIcon from '../ThemeIcon';
import { ThemeContext } from '../../context/ThemeProvider';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_THEME } from '../../constants/apiEndPoints';

function Footer() {
  const { themeColor, updateThemeColor, themes } = useContext(ThemeContext);
  const updateTheme = async themeId => {
    try {
      await makeRequest(UPDATE_THEME, {
        data: {
          preferredThemeId: themeId,
        },
      });
      updateThemeColor(themeId);
    } catch (e) {
      console.log(e);
    }
  };

  // const themeColor = '#000000';

  return (
    <div className="footer" style={{ 'background-color': themeColor }}>
      <div className="center-padding">
        <div className="theme-container">
          <div className="theme-options">
            <span>THEMES</span>
            {themes.map(theme => {
              // console.log(theme.colorHexCode, themeColor);
              if (theme.colorHexCode !== themeColor)
                return <ThemeIcon id={theme.id} themeColor={theme.colorHexCode} updateTheme={updateTheme} />;
              return undefined;
            })}
            {/* <ThemeIcon /> */}
          </div>
          <div className="theme-save">
            <button type="button" style={{ color: themeColor }}>
              Save Theme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
