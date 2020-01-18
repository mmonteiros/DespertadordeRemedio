
import React from 'react';
import { createAppContainer, NavigationEvents} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './home.component';
import { DetailsScreen } from './details.component';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
/*
const HomeStack = createStackNavigator({ 
  HomeScreen 
}, {
  headerMode: false,
});
const SettingsStack = createStackNavigator({ 
  DetailsScreen 
}, {
  headerMode: false,
});
*/
const HomeNavigator = createMaterialBottomTabNavigator({
  Home: {screen: HomeScreen},
  Details: {screen: DetailsScreen},
}, {
  initialRouteName: 'Home',
  activeColor: '#63CDDA',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: 'white' },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline';
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        //IconComponent = HomeIconWithBadge;
      } else if (routeName === 'Details') {
        iconName = focused ? 'ios-list-box' : 'ios-list';
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    }
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

export const AppNavigator = createAppContainer(HomeNavigator);