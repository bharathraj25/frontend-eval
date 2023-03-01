import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({});

// eslint-disable-next-line react/prop-types
export function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('#000000');
  const [themes, setThemes] = useState([
    {
      id: 1,
      colorHexCode: '#000000',
    },
    {
      id: 2,
      colorHexCode: '#800080',
    },
    {
      id: 3,
      colorHexCode: '#0000FF',
    },
    {
      id: 4,
      colorHexCode: '#9B9999',
    },
  ]);
  const updateThemeColor = themeId => {
    const themeObj = themes.filter(theme => theme.id === themeId);
    console.log(themeId, themeObj, themes);
    if (themeObj.length !== 0) setThemeColor(themeObj[0].colorHexCode);
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ themes, themeColor, setThemeColor, updateThemeColor, setThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}
