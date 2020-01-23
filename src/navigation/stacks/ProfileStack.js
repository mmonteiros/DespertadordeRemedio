import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProfileScreen } from "../../screens";

const ProfileStack = createStackNavigator({
    report: {screen: ProfileScreen
    },},{
     initialRouteName: 'report',
     headerMode: false,
     navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="user"
                color={tintColor}
                size={24}
            />
        )
    }),
  }
);

  export default ProfileStack;