import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {MultiBar, MultiBarToggle} from 'react-native-multibar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Routes } from "./Routes";
import { createDrawerNavigator } from 'react-navigation-drawer';   
import ReportStack  from "./stacks/ReportStack";
import HomeStack from "./stacks/HomeStack";
import CalendarStack from "./stacks/CalendarStack";
import ProfileStack from "./stacks/ProfileStack";

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
},
    
));

export {dashboardStack as BaseNavigator};