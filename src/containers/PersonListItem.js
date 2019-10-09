import React from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {getImageUrl} from '../utils';
import {useNavigation} from 'react-navigation-hooks';
import BaseTouchableNativeFeedback from '../components/BaseTouchableNativeFeedback';
import BaseListItem from '../components/BaseListItem';

const PersonListItem = React.memo(({personId, secondaryText}) => {
  const person = useSelector(state => selectors.selectPerson(state, personId));
  const navigation = useNavigation();

  function handleOnPress() {
    navigation.navigate('PersonProfile', {personId});
  }

  return (
    <BaseListItem
      leftAvatar={{source: {uri: getImageUrl(person.profile_path)}}}
      title={person.name}
      subtitle={secondaryText}
      onPress={handleOnPress}
      Component={BaseTouchableNativeFeedback}
    />
  );
});

export default PersonListItem;
