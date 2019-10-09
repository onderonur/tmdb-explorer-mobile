import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectors} from '../reducers';
import Introduction from '../components/Introduction';
import MovieGenreChip from '../containers/MovieGenreChip';
import {getMovieReleaseYear} from '../utils';
import BaseText from '../components/BaseText';
import useReactNativeElementsTheme from '../hooks/useReactNativeElementsTheme';
import MovieRating from './MovieRating';

const MovieIntroduction = React.memo(({movieId}) => {
  const movie = useSelector(state => selectors.selectMovie(state, movieId));
  const {theme} = useReactNativeElementsTheme();

  return (
    movie && (
      <Introduction
        title={
          <React.Fragment>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}>
              <View style={{flexShrink: 1}}>
                <BaseText h4>
                  {movie.title}{' '}
                  <BaseText
                    style={{
                      color: theme.colors.grey4,
                    }}>{`(${getMovieReleaseYear(movie)})`}</BaseText>
                </BaseText>
              </View>
              <View style={{margin: 4}}>
                <MovieRating movieId={movieId} />
              </View>
            </View>
            {movie.tagline ? (
              <BaseText
                style={{color: theme.colors.grey3, fontStyle: 'italic'}}>
                "{movie.tagline}"
              </BaseText>
            ) : null}
          </React.Fragment>
        }
        imageSrc={movie.poster_path}
        content={
          <View>
            <View style={{paddingVertical: 4}}>
              <BaseText h4>Genres</BaseText>
              <View style={{flexDirection: 'row'}}>
                {movie.genres &&
                  movie.genres.map(genreId => (
                    <MovieGenreChip key={genreId} genreId={genreId} />
                  ))}
              </View>
            </View>

            <View style={{paddingVertical: 4}}>
              <BaseText h4>Overview</BaseText>
              <BaseText>{movie.overview}</BaseText>
            </View>
          </View>
        }
      />
    )
  );
});

export default MovieIntroduction;
