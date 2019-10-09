import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {useNavigation} from 'react-navigation-hooks';
import TouchableCard from '../components/TouchableCard';

const PersonCard = React.memo(({personId, width}) => {
  const person = useSelector(state => selectors.selectPerson(state, personId));
  const navigation = useNavigation();

  const handleOnPress = useCallback(() => {
    navigation.navigate('PersonProfile', {personId});
  }, [navigation, personId]);

  return (
    <TouchableCard
      title={person.name}
      imageSrc={person.profile_path}
      imageAspectRatio={2 / 3}
      onPress={handleOnPress}
      width={width}
    />
  );
});

export default PersonCard;
