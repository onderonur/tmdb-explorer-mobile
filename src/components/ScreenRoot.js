import React from 'react';
import {SafeAreaView} from 'react-native';
import AfterInteractions from '../components/AfterInteractions';

function ScreenRoot({afterInteractions, children}) {
  return (
    <SafeAreaView>
      {afterInteractions ? (
        <AfterInteractions>{children}</AfterInteractions>
      ) : (
        children
      )}
    </SafeAreaView>
  );
}

export default ScreenRoot;
