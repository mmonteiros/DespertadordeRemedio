import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import {CalendarScreen, HomeScreen, ProfileScreen, ReportScreen} from '../screens';

const DrawerNavigator = createDrawerNavigator({
  One: {screen: HomeScreen},
  Two: {screen: ProfileScreen}
});

export default DrawerNavigator;
