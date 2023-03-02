import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { ThemeContext } from './context/ThemeProvider';
import makeRequest from './utils/makeRequest';
import { THEME_URL } from './constants/apiEndPoints';
import { Footer, Header } from './components';
import { ERROR_ROUTE, EVENT_ROUTE, HOME_ROUTE } from './constants/routes';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';
import EventPage from './pages/EventPage';

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
      <div className="appBodyContainer">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={`${EVENT_ROUTE}/:eventId`} element={<EventPage />} />
            <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<ErrorPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
