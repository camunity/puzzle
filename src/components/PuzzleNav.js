import { StackNavigator } from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
import PuzzleBoard from './PuzzleBoard';
import PhotoDetailScreen from './PhotoDetailScreen';

const PuzzleNav = StackNavigator({

PuzzleBoard: {
  screen: PuzzleBoard,
  navigationOptions: {
      header: { visible: false }
  }
},
PhotoDetailScreen: {
    screen: PhotoDetailScreen,
    navigationOptions: {

  }
},
},
{
      headerMode: 'screen',
});

export default PuzzleNav;

