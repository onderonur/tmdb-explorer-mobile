import React from 'react';
import {TouchableNativeFeedback} from 'react-native';

const ripple = TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.4)');

function BaseTouchableNativeFeedback(props) {
  return <TouchableNativeFeedback background={ripple} {...props} />;
}

export default BaseTouchableNativeFeedback;
