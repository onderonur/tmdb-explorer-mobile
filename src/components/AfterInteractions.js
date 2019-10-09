import React from 'react';
import useAfterInteractions from '../hooks/useAfterInteractions';
import Spinner from './Spinner';

function AfterInteractions({children}) {
  const isReady = useAfterInteractions();

  return <Spinner loading={!isReady}>{children}</Spinner>;
}

export default AfterInteractions;
