import { TabNavigator, TabView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
import React from 'react';
import PuzzleNav from './PuzzleNav';
// import PuzzleCamera from './PuzzleCamera';
import AddToPuzzleNav from './AddToPuzzleNav';

const MainNav = TabNavigator({
  AddToPuzzle: {
    screen: AddToPuzzleNav,
    navigationOptions: {
      tabBar: {
        visible: false,
        label: 'Camera',
        icon: <Icon name='camera' size={20} style={{ color: 'white' }} />
      }
    }
  },

  PuzzleNav: {
    screen: PuzzleNav,
    navigationOptions: {
      header: { visible: false },
      tabBar: {
        visible: true,
        label: 'Puzzle',
        icon: <Icon name='puzzle-piece' size={20} style={{ color: 'white' }} />
      }
    }
  },
},
// Tab bar customization:
{
  swipeEnabled: true,
  tabBarComponent: Platform.select({ android: TabView.TabBarTop, ios: TabView.TabBarBottom }),
  tabBarPosition: 'top',
  tabBarOptions: {
    style: {
            backgroundColor: '#6CCECB',
            borderBottomWidth: 0.1,
          },
    indicator: { backgroundColor: '#F9E559' },
    showIcon: true,
    showLabel: false,
  }
});

export default MainNav;

