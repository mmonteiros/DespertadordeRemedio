import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { medicineInfo } from "../../../screens/registerMed/medicineInfo";
import { treatmentInfo } from "../../../screens/registerMed/treatmentInfo";

const RegisterMedStack = createStackNavigator({
    medicineInfo: medicineInfo,
    treatmentInfo: treatmentInfo,
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