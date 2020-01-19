import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Divider, Layout } from '@ui-kitten/components';
import { TopNavigationWithMenuShowcase } from '../components/header/Header.js';
import { Routes } from '../navigation';


export const HomeScreen = ({ navigation }) => {

  const navigateCalendar = () => {
    navigation.navigate(Routes.TabsCalendar);
  };

 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigationWithMenuShowcase/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateCalendar}>Open Calendar</Button>
      </Layout>
      
    </SafeAreaView>
  );
};