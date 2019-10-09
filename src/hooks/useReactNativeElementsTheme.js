import {useContext} from 'react';
import {ThemeContext} from 'react-native-elements';

function useReactNativeElementsTheme() {
  const value = useContext(ThemeContext);
  return value;
}

export default useReactNativeElementsTheme;
