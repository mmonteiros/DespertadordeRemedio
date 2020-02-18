import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CalendarScreen} from "../../screens";

const CalendarStack = createStackNavigator({
    calendar: CalendarScreen,
    },{
     initialRouteName: 'calendar',
     headerMode: false,
     navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="calendar"
                color={tintColor}
                size={40}
            />
        )
    }),
  }
);

  export default CalendarStack;