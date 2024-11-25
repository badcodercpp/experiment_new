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
