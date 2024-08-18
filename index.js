/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import SingIn from './src/pages/SingIn';

AppRegistry.registerComponent(appName, () => SingIn)
