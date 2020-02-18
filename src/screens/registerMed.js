import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Divider, Icon, Layout,Button, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

const SearchIcon = (style) => (
  <Icon {...style} name='search-outline'/>
);

class registerMed extends React.Component {
  
  render(){
    const navigateCalendar = () => {
        navigation.navigate("RegisterMed");
      };
  
      const navigateBack = () => {
        navigation.navigate("Home");
      };
  
      const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
      );
  
      const renderSearchAction = () => (
        <TopNavigationAction icon={SearchIcon}/>
      );
      
      const { navigation } = this.props;

    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={styles.container}>
            <TopNavigation title='Despertador de Remédio' alignment='center' backgroundColor= "white" leftControl={BackAction()} rightControls={renderSearchAction()}/>
            <Divider/>
            </Layout>
            <Divider/>
            <Layout style={styles.body}>
                <Button onPress={navigateCalendar}>Register</Button>
            </Layout>
        
        </SafeAreaView>
    );
  };

};

const styles = StyleSheet.create({
  container: {
    minHeight: 8,
  },
  body: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#63CDDA',
  },
});

export {registerMed};