import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CalendarScreen} from "../../screens";

const CalendarStack = createStackNavigator({
    calendar: {screen: CalendarScreen
    },},{
     initialRouteName: 'calendar',
     headerMode: false,
     navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="calendar"
                color={tintColor}
                size={24}
            />
        )
    }),
  }
);

  export default CalendarStack;