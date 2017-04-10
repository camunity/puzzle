import React from 'react';
import { StackNavigator } from 'react-navigation';
import AddPhotosView from './AddPhotosView';

const AddToPuzzleNav = StackNavigator({
  AddPhotos: {
    screen: AddPhotosView,
    navigationOptions: {
      header: {
        title: 'Add to Your Puzzle!'
      }
    }
  }
});

//   SecondScreen: {
//     screen: Somewhere,
//   }
// }, {
//   mode: 'modal'
// })

export default AddToPuzzleNav;

