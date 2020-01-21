import React from 'react';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {MultiBar, MultiBarToggle} from 'react-native-multibar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CalendarScreen, HomeScreen, ProfileScreen, ReportScreen} from "../screens";
import {Routes} from "./Routes";
import { DrawerScreen } from '../components/drawer/Drawer.component';
import { createDrawerNavigator } from 'react-navigation-drawer';   


const HomeStack = createStackNavigator({
    Home: {screen:HomeScreen
    },
    Details:{screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Details`,
        //headerLeft:  <Icon name='md-menu' size={30}/>,
        headerStyle:{
          alignContent: 'center',
        }
      }
      ),
    },
  },{
     initialRouteName: 'Home',
     headerMode: false,
     navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="home"
                color={tintColor}
                size={24}
            />
        )
    }),
  }
  );
  
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

  const ProfileStack = createStackNavigator({
    report: {screen: ProfileScreen
    },},{
     initialRouteName: 'report',
     headerMode: false,
     navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="user"
                color={tintColor}
                size={24}
            />
        )
    }),
  }
  );


const TabsNavigator = createBottomTabNavigator({
    [Routes.TabsHome]:  { screen:HomeStack },

    [Routes.TabsCalendar]: { screen: CalendarStack  },
    
    MultiBar: {
        screen: () => null,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: () => (
                <MultiBarToggle
                    navigation={navigation}
                    actionSize={40}
                    routes={[
                        {
                            routeName: Routes.OtherScreen,
                            color: '#FF8360',
                            icon: (
                                <Icon
                                    name="photo"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: '#E8E288',
                            icon: (
                                <Icon
                                    name="dashboard"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: '#7DCE82',
                            icon: (
                                <Icon
                                    name="gears"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                    ]}
                    icon={(
                        <Icon
                            name="plus"
                            color="#FFFFFF"
                            size={32}
                        />
                    )}
                />
            )
        }),
        params: {
            navigationDisabled: true
        }
    },
    
    [Routes.TabsReport]: { screen: ReportStack },
    
    [Routes.TabsProfile]: { screen: ProfileStack }
}, {
    initialRouteName: "TABS_HOME",
    tabBarComponent: MultiBar,
    
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: '#586589',
        style: {
            backgroundColor: 'white'
        },
        tabStyle: {}
    }
});

const dashboardStack = createAppContainer(createDrawerNavigator({
    Home: TabsNavigator, 
    Calendar: CalendarStack,
    Report: ReportStack,
    Profile: ProfileStack
},));

export {dashboardStack as BaseNavigator};