import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

const SearchIcon = (style) => (
  <Icon {...style} name='search-outline'/>
);

  export const ReportScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const renderSearchAction = () => (
    <TopNavigationAction icon={SearchIcon}/>
 );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Despertador de Remédio' alignment='center' backgroundColor= "white" leftControl={BackAction()} rightControls={renderSearchAction()}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Report</Text>
      </Layout>
      
    </SafeAreaView>
  );
};