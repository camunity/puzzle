import React from 'react';
import { StackNavigator } from 'react-navigation';
import PuzzleBoard from './PuzzleBoard';
// import PhotoDetailScreen from './PhotoDetailScreen';

const PuzzleBoardNav = StackNavigator({
  PuzzleBoard: {
    screen: PuzzleBoard,
    navigationOptions: {
      header: {
        title: 'Profile'
      }
    }
  },

//   SelectedPieceDetail: {
//     screen: PhotoDetailScreen,
//   }
 }, 
{
  // mode: 'modal'
});

export default PuzzleBoardNav;

