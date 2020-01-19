import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import {CalendarScreen, HomeScreen, ProfileScreen, ReportScreen} from '../screens';
import { DrawerHeaderShowcase } from "../components/drawer/Drawer";

const DrawerNavigator = createDrawerNavigator({
  Home: {screen: HomeScreen},
  Drawer: {screen: DrawerHeaderShowcase},
});

export default DrawerNavigator;
