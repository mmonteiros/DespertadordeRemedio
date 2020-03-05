<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {
  Divider,
  Icon,
  Layout,
  Button,
  Card,
  Text,
  TopNavigation,
  Input,
  TopNavigationAction,
  CardHeader,
} from '@ui-kitten/components';

import {DropDownMenu} from '../../components/dropDownMenu';
import styles from './styles';

const ArrowForwardIcon = style => <Icon {...style} name="arrow-forward" />;

const BackIcon = style => <Icon {...style} name="arrow-back" />;

const SearchIcon = style => <Icon {...style} name="search-outline" />;

function registerMed(props) {
  const Header = () => (
    <CardHeader
      headerStyle={styles.HeaderCard}
      title="Informações do Medicamento"
    />
  );

  // Button next
  const Footer = () => (
    <View style={styles.footerContainer}>
      <Button icon={ArrowForwardIcon}></Button>
    </View>
  );

  const navigateCalendar = () => {
    navigation.navigate('RegisterMed');
  };

  const navigateBack = () => {
    navigation.navigate('Home');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const renderSearchAction = () => <TopNavigationAction icon={SearchIcon} />;

  const {navigation} = props;
  const data = ['Comprimido(s)', ' Gota(s)'];

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.safeArea}>
        <TopNavigation
          title="Despertador de Remédio"
          alignment="center"
          backgroundColor="white"
          leftControl={BackAction()}
          rightControls={renderSearchAction()}
        />
        <Divider />
      </Layout>
      <Divider />
      <Layout style={styles.container}>
        <Card style={styles.cardMain} header={Header} footer={Footer}>
          <Input
            style={styles.cardContainer}
            placeholder="Nome do Medicamento"
            id="email"
            name="email"
            autoComplete="on"
            autoFocus
          />
          <Card style={styles.cardPane}>
            <Input style={styles.cardContent} placeholder="Quantidade" />
            <DropDownMenu data={data} />
          </Card>
          <Card>
            <Text>Validade do Medicamento</Text>
          </Card>
        </Card>
      </Layout>
    </SafeAreaView>
  );
}

export {registerMed};
=======
=======
>>>>>>> parent of 41e5c69... Update
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {
  Divider,
  Icon,
  Layout,
  Button,
  Card,
  Text,
  TopNavigation,
  Input,
  TopNavigationAction,
  CardHeader,
} from '@ui-kitten/components';

<<<<<<< HEAD
//import styles from './styles'
=======
import {DropDownMenu} from '../../components/dropDownMenu';
import styles from './styles';
>>>>>>> parent of 41e5c69... Update

const ArrowForwardIcon = style => <Icon {...style} name="arrow-forward" />;

const BackIcon = style => <Icon {...style} name="arrow-back" />;

const SearchIcon = style => <Icon {...style} name="search-outline" />;

function registerMed(props) {
  const Header = () => (
    <CardHeader
      headerStyle={styles.HeaderCard}
      title="Informações do Medicamento"
    />
  );

  // Button next
  const Footer = () => (
    <View style={styles.footerContainer}>
      <Button icon={ArrowForwardIcon}></Button>
    </View>
  );

  const navigateCalendar = () => {
    navigation.navigate('RegisterMed');
  };

  const navigateBack = () => {
    navigation.navigate('Home');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const renderSearchAction = () => <TopNavigationAction icon={SearchIcon} />;

  const {navigation} = props;
<<<<<<< HEAD

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.container}>
=======
  const data = ['Comprimido(s)', ' Gota(s)'];

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.safeArea}>
>>>>>>> parent of 41e5c69... Update
        <TopNavigation
          title="Despertador de Remédio"
          alignment="center"
          backgroundColor="white"
          leftControl={BackAction()}
          rightControls={renderSearchAction()}
        />
        <Divider />
      </Layout>
      <Divider />
<<<<<<< HEAD
      <Layout style={styles.body}>
        <Card style={styles.Card} header={Header} footer={Footer}>
          <Input
            style={styles.CardContainer}
=======
      <Layout style={styles.container}>
        <Card style={styles.cardMain} header={Header} footer={Footer}>
          <Input
            style={styles.cardContainer}
>>>>>>> parent of 41e5c69... Update
            placeholder="Nome do Medicamento"
            id="email"
            name="email"
            autoComplete="on"
            autoFocus
          />
<<<<<<< HEAD
          <Card style={styles.CardPane}>
            <Input style={styles.CardContent} placeholder="Quantidade" />
=======
          <Card style={styles.cardPane}>
            <Input style={styles.cardContent} placeholder="Quantidade" />
            <DropDownMenu data={data} />
          </Card>
          <Card>
            <Text>Validade do Medicamento</Text>
>>>>>>> parent of 41e5c69... Update
          </Card>
        </Card>
      </Layout>
    </SafeAreaView>
  );
}

<<<<<<< HEAD
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
    fontWeight: 'bold',
  },
  Card: {
    borderRadius: 20,
  },
  CardContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    borderColor: '#FFF',
    marginBottom: 20,
  },
  CardContent: {
    backgroundColor: '#F2F2F2',
    borderColor: '#FFF',
    borderRadius: 30,
    paddingEnd: 160,
  },
  CardPane: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderColor: '#404040',
  },
  cardChange: {},
});

export {registerMed};
>>>>>>> parent of 4f50b44... Update for registerMed
=======
export {registerMed};
>>>>>>> parent of 41e5c69... Update
