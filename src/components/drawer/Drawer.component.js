import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Layout, Text } from '@ui-kitten/components';


export const DrawerScreen = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>SETTINGS</Text>
      </Layout>
    </SafeAreaView>
  );
};