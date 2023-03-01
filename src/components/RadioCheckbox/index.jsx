/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import './RadioCheckbox.css';

function RadioCheckbox({ name, label, selectedBox, setSelectedBox }) {
  const { themeColor } = useContext(ThemeContext);

  return (
    <div className="radio-checkbox">
      <label htmlFor={name} className="container">
        {label}
        <input
          type="checkbox"
          checked={label === selectedBox}
          onChange={() => setSelectedBox(name)}
          style={{ 'background-color': themeColor }}
        />
        <span className="checkmark" />
      </label>
    </div>
  );
}

export default RadioCheckbox;
