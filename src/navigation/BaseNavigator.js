import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {MultiBar, MultiBarToggle} from 'react-native-multibar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CalendarScreen, HomeScreen, ProfileScreen, ReportScreen} from "../screens";
import {Routes} from "./Routes";

const TabsNavigator = createBottomTabNavigator({
    [Routes.TabsHome]: {
        screen: HomeScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="home"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    [Routes.TabsCalendar]: {
        screen: CalendarScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="calendar"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
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
    [Routes.TabsReport]: {
        screen: ReportScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="archive"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    [Routes.TabsProfile]: {
        screen: ProfileScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="user"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
}, {
    tabBarComponent: MultiBar,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: 'black',
        inactiveTintColor: '#586589',
        style: {
            backgroundColor: 'white'
        },
        tabStyle: {}
    }
});

const BaseNavigatorContainer = createAppContainer(createStackNavigator({
    [Routes.Tabs]: TabsNavigator,
    [Routes.OtherScreen]: ProfileScreen,
}, {
    headerMode: 'none'
}));

export {BaseNavigatorContainer as BaseNavigator};