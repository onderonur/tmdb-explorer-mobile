import React from 'react';
import {useNavigationParam} from 'react-navigation-hooks';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import {HeaderTitle} from 'react-navigation-stack';

function PersonProfileNavigationTitle() {
  const personId = useNavigationParam('personId');
  const person = useSelector(state => selectors.selectPerson(state, personId));

  return person && <HeaderTitle>{person.name}</HeaderTitle>;
}

export default PersonProfileNavigationTitle;
