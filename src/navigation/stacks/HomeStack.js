import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen, ProfileScreen } from "../../screens";

const HomeStack = createStackNavigator({
    Home: HomeScreen,
  },{
     initialRouteName: 'Home',
     headerMode: false,
     navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="home"
                color={tintColor}
                size={40}
            />
        )
    }),
  }
);

export default HomeStack;