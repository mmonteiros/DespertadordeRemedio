import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ReportScreen } from "../../screens";

const ReportStack = createStackNavigator({
    report: {screen: ReportScreen
    },},{
     initialRouteName: 'report',
     headerMode: false,
     navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="archive"
                color={tintColor}
                size={24}
            />
        )
    }),
  }
);

export default ReportStack;