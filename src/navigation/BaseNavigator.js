import React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {MultiBar, MultiBarToggle} from 'react-native-multibar';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {Routes} from './Routes';

import ReportStack from './stacks/ReportStack';
import HomeStack from './stacks/HomeStack';
import CalendarStack from './stacks/CalendarStack';
import ProfileStack from './stacks/ProfileStack';
import RegisterMedStack from './stacks/registerMedStack';
import TreatmentMedStack from './stacks/treatmentInfo';
import SideMenu from '../components/Drawer/Drawer';
import TabBar from '../components/Footer/tabBar';
import {medicineInfo} from '../screens/registerMed/medicineInfo';
import ImagePickerPage from '../screens/registerMed/medicineInfo/imagePicker';

const TabsNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Calendar: CalendarStack,
    MedicineInfo: RegisterMedStack,
    Report: ReportStack,
    Profile: ProfileStack,
  },
  {
    initialRouteName: 'Home',

    tabBarComponent: props => <TabBar {...props} />,

    tabBarOptions: {
      tabFeatured: 'MedicineInfo',
      backgroundFeaturedIcon: '#3DC1D3',
      activeFeaturedTintColor: 'skyblue',
      inactiveFeatureTintColor: 'white',
      showLabel: true,
      activeTintColor: '#63CDDA',
      inactiveTintColor: '#E1E3DB',
      style: {
        height: 60,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#63CDDA',
      },
      tabStyle: {},
    },
  },
);

const dashboardStack = createAppContainer(
  createDrawerNavigator(
    {
      Home: TabsNavigator,
      TreatmentInfo: TreatmentMedStack,
      Calendar: CalendarStack,
      Register: RegisterMedStack,
      Report: ReportStack,
      Profile: ProfileStack,
      ImagePicker: ImagePickerPage,
    },
    {
      initialRouteName: 'Home',
      contentComponent: SideMenu,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
      drawerWidth: 290,
    },
  ),
);

export {dashboardStack as BaseNavigator};
