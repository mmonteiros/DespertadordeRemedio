import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import {
  CalendarScreen,
  HomeScreen,
  ProfileScreen,
  ReportScreen,
} from '../screens';
import {DrawerComponent} from '../components/Drawer/Drawer';
import {TabsNavigator, Routes} from './';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
  },
  {
    contentComponent: DrawerComponent,
  },
);

export const AppDrawerNavigator = createAppContainer(DrawerNavigator);
