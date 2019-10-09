import {useState, useEffect} from 'react';
import {InteractionManager} from 'react-native';

function useAfterInteractions() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setIsReady(true);
    });
  }, []);

  return isReady;
}

export default useAfterInteractions;
