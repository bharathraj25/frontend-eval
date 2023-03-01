/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './FilterIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../../context/ThemeProvider';

function FilterIcon({ openFilter, setOpenFilter }) {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div className="filter-container" style={{ color: themeColor }}>
      <FontAwesomeIcon icon={faFilter} style={{ height: '25px' }} onClick={() => setOpenFilter(!openFilter)} />
      <span>Filter</span>
      {openFilter ? (
        <FontAwesomeIcon
          icon={faChevronUp}
          style={{ height: '25px' }}
          role="button"
          onClick={() => setOpenFilter(!openFilter)}
        />
      ) : (
        <FontAwesomeIcon icon={faChevronDown} style={{ height: '25px' }} onClick={() => setOpenFilter(!openFilter)} />
      )}
    </div>
  );
}

export default FilterIcon;
