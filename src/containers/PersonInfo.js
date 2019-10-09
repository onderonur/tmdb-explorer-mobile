import React from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import TextWithLabel from '../components/TextWithLabel';
import BaseText from '../components/BaseText';

const PersonInfo = React.memo(({personId}) => {
  const person = useSelector(state => selectors.selectPerson(state, personId));

  function getGender() {
    return person.gender === 1 ? 'Female' : person.gender === 2 ? 'Male' : '';
  }

  return person ? (
    <>
      <TextWithLabel label="Known For" text={person.known_for_department} />
      <TextWithLabel label="Gender" text={getGender(person.gender)} />
      <TextWithLabel label="Birthday" text={person.birthday} />
      <TextWithLabel label="Place of Birth" text={person.place_of_birth} />
      {person.official_site && (
        <TextWithLabel label="Official Site" text={person.official_site} />
      )}
      {person.also_known_as && person.also_known_as.length ? (
        <TextWithLabel
          label="Also Known As"
          text={person.also_known_as.map(alias => (
            <BaseText key={alias}>{alias}</BaseText>
          ))}
        />
      ) : null}
    </>
  ) : null;
});

export default PersonInfo;
