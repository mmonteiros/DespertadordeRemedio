import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HomeScreen, ProfileScreen } from "../../screens";

const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
    Details:{ screen: ProfileScreen },
  },{
     initialRouteName: 'Home',
     headerMode: false,
     navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="home"
                color={tintColor}
                size={24}
            />
        )
    }),
  }
);

export default HomeStack;