import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, Button, Divider, Layout, TopNavigation,TopNavigationAction, } from '@ui-kitten/components';
import { TopNavigationWithMenuShowcase } from '../components/header/Header.js';
import { Routes, BaseNavigator } from '../navigation';

const MenuIcon = (style) => (
  <Icon {...style} name='menu-outline'/>
);

const SearchIcon = (style) => (
    <Icon {...style} name='search-outline'/>
  );

export const HomeScreen = ({ navigation }) => {

  const navigateCalendar = () => {
    navigation.openDrawer();
  };

  const renderSearchAction = () => (
    <TopNavigationAction icon={SearchIcon}/>
  );

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={ navigateCalendar }/> 
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
      <TopNavigation
        title='Despertador de Remédio'
        alignment='center'
        backgroundColor= 'white'
        leftControl={renderMenuAction()}
        rightControls={renderSearchAction()}
      />
    </Layout>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateCalendar}>Open Calendar</Button>
      </Layout>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 8,
  },
});