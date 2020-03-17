import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { medicineInfo } from "../../../screens/registerMed/medicineInfo";

const RegisterMedStack = createSwitchNavigator({
    medicineInfo: medicineInfo
  },{
     initialRouteName: 'medicineInfo',
     headerMode: false,
     navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="plus" color={tintColor} size={35} />
        ),
      }),
  }
);

export default RegisterMedStack;