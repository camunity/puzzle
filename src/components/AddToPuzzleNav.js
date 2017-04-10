import React from 'react';
import { StackNavigator } from 'react-navigation';
import AddPhotosView from './AddPhotosView';

const AddToPuzzleNav = StackNavigator({
  AddPhotos: {
    screen: AddPhotosView,
    navigationOptions: {
      header: {
		visible: false
      }
    }
  }
}, {
  headerMode: 'screen'
});

//   SecondScreen: {
//     screen: Somewhere,
//   }
// }, {
//   mode: 'modal'
// })

export default AddToPuzzleNav;

