/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import {SafeAreaView} from 'react-navigation';

const HomeIcon = style => <Icon {...style} name="home" />;

const CalendarIcon = style => <Icon {...style} name="calendar" />;

const ReportIcon = style => <Icon {...style} name="archive" />;

const ProfileIcon = style => <Icon {...style} name="people" />;

export const TabBarComponent = ({navigation}) => {
  const onSelect = index => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BottomNavigation
        selectedIndex={navigation.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab icon={HomeIcon} />
        <BottomNavigationTab icon={CalendarIcon} />
        <BottomNavigationTab icon={ReportIcon} />
        <BottomNavigationTab icon={ProfileIcon} />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopColor: '#fff',
    borderTopWidth: 0.5,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});
