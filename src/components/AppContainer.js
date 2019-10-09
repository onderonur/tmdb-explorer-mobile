import React from 'react';
import PopularMovies from '../screens/PopularMovies';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MovieProfile from '../screens/MovieProfile';
import MovieVideoPlayerModal from '../screens/MovieVideoPlayer';
import PopularPeople from '../screens/PopularPeople';
import PersonProfile from '../screens/PersonProfile';
import MovieAndPersonSearch from '../screens/MovieAndPersonSearch';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import MovieSearchResults from '../screens/MovieSearchResults';
import PersonSearchResults from '../screens/PersonSearchResults';
import {Icon} from 'react-native-elements';
import LazyTabPlaceholder from './LazyTabPlaceholder';
import MovieSearchResultsTabBarLabel from '../containers/MovieSearchResultsTabBarLabel';
import PersonSearchResultsTabBarLabel from '../containers/PersonSearchResultsTabBarLabel';
import MovieImageGallery from '../screens/MovieImageGallery';

const defaultNavigationOptions = {
  headerTintColor: '#fff',
  title: 'TMDbExplorerApp',
};

const MoviesStack = createStackNavigator(
  {
    PopularMovies,
    MovieProfile,
    MovieImageGallery,
  },
  {defaultNavigationOptions},
);

const PeopleStack = createStackNavigator(
  {
    PopularPeople,
    PersonProfile,
  },
  {defaultNavigationOptions},
);

const SearchResultsTab = createMaterialTopTabNavigator(
  {
    Movies: {
      screen: MovieSearchResults,
      navigationOptions: {
        tabBarLabel: ({focused, tintColor}) => (
          <MovieSearchResultsTabBarLabel tintColor={tintColor} />
        ),
      },
    },
    Person: {
      screen: PersonSearchResults,
      navigationOptions: {
        tabBarLabel: ({focused, tintColor}) => (
          <PersonSearchResultsTabBarLabel tintColor={tintColor} />
        ),
      },
    },
  },
  {
    lazy: true,
    lazyPlaceholderComponent: LazyTabPlaceholder,
    defaultNavigationOptions: {
      swipeEnabled: true,
    },
    tabBarOptions: {
      style: {
        backgroundColor: '#333',
      },
      indicatorStyle: {
        backgroundColor: 'tomato',
      },
    },
  },
);

const SearchStack = createStackNavigator(
  {
    MovieAndPersonSearch,
    SearchResults: {
      screen: SearchResultsTab,
      navigationOptions: {
        title: 'Search Results',
      },
    },
  },
  {defaultNavigationOptions},
);

const MainTabNavigator = createBottomTabNavigator(
  {
    Movies: MoviesStack,
    People: PeopleStack,
    Search: SearchStack,
  },
  {
    backBehavior: 'history',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;

        let iconName;

        switch (routeName) {
          case 'Movies':
            iconName = 'movie';
            break;
          case 'People':
            iconName = 'person';
            break;
          case 'Search':
            iconName = 'search';
            break;
        }

        return <Icon type="material" name={iconName} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const RootStack = createStackNavigator(
  {
    Main: MainTabNavigator,
    MovieVideoPlayerModal,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
