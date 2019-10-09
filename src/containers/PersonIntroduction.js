import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import Introduction from '../components/Introduction';
import BaseText from '../components/BaseText';

const PersonIntroduction = React.memo(({personId}) => {
  const person = useSelector(state => selectors.selectPerson(state, personId));

  return (
    person && (
      <Introduction
        title={person.name}
        imageSrc={person.profile_path}
        content={
          <View>
            <BaseText h4>Biography</BaseText>
            <BaseText>{person.biography}</BaseText>
          </View>
        }
      />
    )
  );
});

export default PersonIntroduction;
