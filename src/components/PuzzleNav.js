import { TabNavigator, TabView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
import React from 'react';
import AddToPuzzleNav from './AddToPuzzleNav';
import PuzzleBoardNav from './PuzzleBoardNav';

const PuzzleNav = TabNavigator({
  AddToPuzzle: {
    screen: AddToPuzzleNav,
    navigationOptions: {
      tabBar: {
        label: 'Add',
        icon: <Icon name='plus' size={20} style={{ color: 'black' }} />
      }
    }
  },

  PuzzleBoard: {
    screen: PuzzleBoardNav,
    navigationOptions: {
      tabBar: {
        visible: true,
        label: 'Puzzle',
        icon: <Icon name='puzzle-piece' size={20} style={{ color: 'black' }} />
    }
  }
}
},
// Tab bar customization:
{
  swipeEnabled: true,
  tabBarComponent: Platform.select({ android: TabView.TabBarTop, ios: TabView.TabBarBottom }),
  tabBarPosition: 'bottom',
  tabBarOptions: {
    indicator: { backgroundColor: 'white' },
    showIcon: true,
    showLabel: Platform.select({ android: false, ios: true }),
  }
});

export default PuzzleNav;

