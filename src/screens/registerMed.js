import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Divider, Icon, Layout,Button, Card, Text, TopNavigation, Input ,TopNavigationAction, CardHeader } from '@ui-kitten/components';

const ArrowForwardIcon = (style) => (
  <Icon {...style} name='arrow-forward' />
);

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

const SearchIcon = (style) => (
  <Icon {...style} name='search-outline'/>
);

class registerMed extends React.Component {
  
  render(){

    const Header = () => (
      <CardHeader
        headerStyle={styles.HeaderCard}
        title='Informações do Medicamento'

      />
    );
    
    const Footer = () => (
      <View style={styles.footerContainer}>
        <Button icon={ArrowForwardIcon}>
        </Button>
      </View>
    );

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
            <Card header={Header} footer={Footer}>
						    <Input placeholder='Nome do Medicamento' id="email" name="email" autoComplete="on" autoFocus />              
            </Card>
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
    backgroundColor: '#63CDDA',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 4,
  },
  HeaderCard: {
    justifyContent: 'center',
  },
  cardChange: {

  },
});

export {registerMed};