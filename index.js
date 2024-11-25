/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

function formatNumber(input) {
      // Remove all characters except numbers and decimal points
      let value = input.value.replace(/[^0-9.]/g, '');

      // Prevent multiple decimal points
      if ((value.match(/\./g) || []).length > 1) {
        value = value.slice(0, value.lastIndexOf('.'));
      }

      // Format the number with commas for thousands
      const parts = value.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      input.value = parts.join('.');
    }

AppRegistry.registerComponent(appName, () => App);



import React, { useState } from 'react';

const NumberInput = () => {
  const [value, setValue] = useState('');

  const formatNumber = (input: string) => {
    // Remove all characters except numbers and decimal points
    let formattedValue = input.replace(/[^0-9.]/g, '');

    // Prevent multiple decimal points
    if ((formattedValue.match(/\./g) || []).length > 1) {
      formattedValue = formattedValue.slice(0, formattedValue.lastIndexOf('.'));
    }

    // Format the integer part with commas for thousands
    const parts = formattedValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return parts.join('.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = formatNumber(rawValue);
    setValue(formattedValue);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter number"
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  } as React.CSSProperties,
  input: {
    width: '200px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
  } as React.CSSProperties,
};

export default NumberInput;

