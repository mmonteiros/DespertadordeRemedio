import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

const SearchIcon = (style) => (
  <Icon {...style} name='search-outline'/>
);

class ReportScreen extends React.Component {
  
  render() {
    const { navigation } = this.props;

    const navigateBack = () => {
      navigation.navigate("Home");
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
        <Layout style={styles.body}>
          <Text category='h1'>Report</Text>
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

export {ReportScreen};