import React from 'react';
import {Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {useNavigationParam} from 'react-navigation-hooks';

const PersonSearchResultsTabBarLabel = ({tintColor}) => {
  const searchValue = useNavigationParam('searchValue');
  const total = useSelector(state =>
    selectors.selectPersonSearchResultsTotalCount(state, searchValue),
  );

  return <Text style={{color: tintColor}}>PEOPLE ({total})</Text>;
};

export default PersonSearchResultsTabBarLabel;
