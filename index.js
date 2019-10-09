// https://github.com/kmagiera/react-native-gesture-handler/issues/320
import 'react-native-gesture-handler';

import {AppRegistry, YellowBox} from 'react-native';
import {name as appName} from './app.json';
import Root from './src/components/Root.js';

YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps has been renamed',
  'Warning: componentWillMount has been renamed',
]);

AppRegistry.registerComponent(appName, () => Root);
