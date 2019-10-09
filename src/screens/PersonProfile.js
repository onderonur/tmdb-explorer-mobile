import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchPerson} from '../actions';
import {useNavigationParam} from 'react-navigation-hooks';
import {View} from 'react-native';
import PersonIntroduction from '../containers/PersonIntroduction';
import PersonProfileNavigationTitle from '../containers/PersonProfileNavigationTitle';
import PersonInfo from '../containers/PersonInfo';
import PersonCastingList from '../containers/PersonCastingList';
import BaseText from '../components/BaseText';
import ScreenRoot from '../components/ScreenRoot';

const REQUIRED_FIELDS = ['biography', 'imdb_id'];

function PersonProfile() {
  const personId = useNavigationParam('personId');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPerson(personId, REQUIRED_FIELDS));
  }, [personId, dispatch]);

  const ListHeaderComponent = (
    <React.Fragment>
      <PersonIntroduction personId={personId} />
      <View style={{paddingHorizontal: 12}}>
        <View style={{paddingVertical: 8}}>
          <BaseText h4>Personal Info</BaseText>
          <PersonInfo personId={personId} />
        </View>
        <BaseText h4>Castings</BaseText>
      </View>
    </React.Fragment>
  );

  return (
    <ScreenRoot afterInteractions>
      <PersonCastingList
        personId={personId}
        ListHeaderComponent={ListHeaderComponent}
      />
    </ScreenRoot>
  );
}

PersonProfile.navigationOptions = {
  headerTitle: <PersonProfileNavigationTitle />,
};

export default PersonProfile;
