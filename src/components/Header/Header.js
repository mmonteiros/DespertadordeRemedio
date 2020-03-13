import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { AppDrawerNavigator } from '../../navigation';
import { Routes, BaseNavigator } from '../../navigation/Routes';

const MenuIcon = (style) => (
  <Icon {...style} name='menu-outline'/>
);

const SearchIcon = (style) => (
    <Icon {...style} name='search-outline'/>
  );

export const TopNavigationWithMenuShowcase = ({ navigation }) => {

  const navigateCalendar = () => {
    navigation.navigate("Drawer");
  };


  const renderSearchAction = () => (
      <TopNavigationAction icon={SearchIcon}/>
  );

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={ navigateCalendar }/> 
  );

  return (
    <Layout style={styles.container}>
      <TopNavigation
        title='Despertador de Remédio'
        alignment='center'
        backgroundColor= 'white'
        leftControl={renderMenuAction()}
        rightControls={renderSearchAction()}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 8,
  },
});