/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './SearchContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context/ThemeProvider';

function SearchContainer({ setSearchName }) {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div className="search-container" style={{ color: themeColor }}>
      <input
        placeholder="EVENT NAME"
        onChange={e => setSearchName(e.target.value ?? undefined)}
        style={{ 'border-color': themeColor }}
      />
      <FontAwesomeIcon icon={faSearch} style={{ height: '25px' }} />
    </div>
  );
}

export default SearchContainer;
