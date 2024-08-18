/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import Feed from './src/pages/Feed'

AppRegistry.registerComponent(appName, () => Feed)
