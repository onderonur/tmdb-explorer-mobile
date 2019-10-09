import React from 'react';
import {useSelector} from 'react-redux';
import GallerySwiper from 'react-native-gallery-swiper';
import {selectors} from '../reducers';
import {useNavigationParam} from 'react-navigation-hooks';
import {getImageUrl} from '../utils';
import MovieProfileNavigationTitle from '../containers/MovieProfileNavigationTitle';

function MovieImageGallery() {
  const movieId = useNavigationParam('movieId');
  const backdropIds = useSelector(state =>
    selectors.selectMovieBackdrops(state, movieId),
  );
  const backdrops = useSelector(state =>
    backdropIds.map(backdropId => selectors.selectBackdrop(state, backdropId)),
  );

  return (
    <GallerySwiper
      images={backdrops.map(backdrop => ({
        uri: getImageUrl(backdrop.file_path),
      }))}
      initialNumToRender={2}
    />
  );
}

MovieImageGallery.navigationOptions = {
  headerTitle: <MovieProfileNavigationTitle />,
};

export default MovieImageGallery;
