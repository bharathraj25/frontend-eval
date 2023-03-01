import React, { useContext, useEffect } from 'react';
import './App.css';
import { Home } from './pages';
import 'font-awesome/css/font-awesome.min.css';
import { ThemeContext } from './context/ThemeProvider';
import makeRequest from './utils/makeRequest';
import { THEME_URL } from './constants/apiEndPoints';

function App() {
  const { setThemes, updateThemeColor } = useContext(ThemeContext);
  useEffect(() => {
    try {
      makeRequest(THEME_URL).then(allThemes => {
        setThemes(allThemes.themes);
        updateThemeColor(allThemes.preferredThemeId);
      });
    } catch (e) {
      console.log('Error', e);
    }
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}
export default App;
