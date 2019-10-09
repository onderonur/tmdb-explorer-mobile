import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchMovie} from '../actions';
import {useNavigationParam} from 'react-navigation-hooks';
import {View} from 'react-native';
import MovieProfileNavigationTitle from '../containers/MovieProfileNavigationTitle';
import MovieIntroduction from '../containers/MovieIntroduction';
import MovieVideoList from '../containers/MovieVideoList';
import Recommendations from '../containers/Recommendations';
import MovieCastList from '../containers/MovieCastList';
import BaseText from '../components/BaseText';
import ScreenRoot from '../components/ScreenRoot';
import MovieImageList from '../containers/MovieImageList';

const REQUIRED_FIELDS = ['tagline'];

function MovieProfile() {
  const movieId = useNavigationParam('movieId');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(movieId, REQUIRED_FIELDS));
  }, [movieId, dispatch]);

  const ListHeaderComponent = (
    <>
      <MovieIntroduction movieId={movieId} />
      <View style={{paddingHorizontal: 12}}>
        <View style={{paddingVertical: 8}}>
          <BaseText h4>Images</BaseText>
          <MovieImageList movieId={movieId} />

          <BaseText h4>Videos</BaseText>
          <MovieVideoList movieId={movieId} />

          <BaseText h4>Recommendations</BaseText>
          <Recommendations movieId={movieId} />
        </View>
        <BaseText h4>Cast</BaseText>
      </View>
    </>
  );

  return (
    <ScreenRoot afterInteractions>
      <MovieCastList
        movieId={movieId}
        ListHeaderComponent={ListHeaderComponent}
      />
    </ScreenRoot>
  );
}

MovieProfile.navigationOptions = {
  headerTitle: <MovieProfileNavigationTitle />,
};

export default MovieProfile;
