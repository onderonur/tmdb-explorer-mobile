import React from 'react';
import ScreenRoot from './ScreenRoot';
import Spinner from './Spinner';

function LazyTabPlaceholder() {
  return (
    <ScreenRoot>
      <Spinner loading />
    </ScreenRoot>
  );
}

export default LazyTabPlaceholder;
