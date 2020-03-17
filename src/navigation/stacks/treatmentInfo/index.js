import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { treatmentInfo } from "../../../screens/registerMed/treatmentInfo";

const TreatmentMedStack = createSwitchNavigator({
    treatmentInfo: treatmentInfo,
  },{
     initialRouteName: 'treatmentInfo',
     headerMode: false,
  }
);

export default TreatmentMedStack;