import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ReportScreen } from "../../screens";

const ReportStack = createStackNavigator({
    report: ReportScreen,
    },{
     initialRouteName: 'report',
     headerMode: false,
     navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="file-document-box-multiple-outline"
                color={tintColor}
                size={34}
            />
        )
    }),
  }
);

export default ReportStack;