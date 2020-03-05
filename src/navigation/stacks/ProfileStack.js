import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ProfileScreen } from "../../screens";

const ProfileStack = createStackNavigator({
    report: ProfileScreen,
    },{
     initialRouteName: 'report',
     headerMode: false,
     navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="user-friends"
                color={tintColor}
                size={34}
            />
        )
    }),
  }
);

  export default ProfileStack;