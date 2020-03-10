import React from 'react';
import {View, Dimensions} from 'react-native';
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

import {DropDownMenu} from '../../../components/dropDownMenu';
import {DatepickerIcon} from '../../../components/datePicker';
import styles from './styles';

// Icons
const ArrowForwardIcon = style => <Icon {...style} name="arrow-forward" />;
const BackIcon = style => <Icon {...style} name="arrow-back" />;
const SearchIcon = style => <Icon {...style} name="search-outline" />;

function medicineInfo(props) {
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const renderSearchAction = () => <TopNavigationAction icon={SearchIcon} />;

  const Header = () => (
    <CardHeader
      headerStyle={styles.headerCard}
      title="Informações do Medicamento"
    />
  );

  // Button next
  const Footer = () => (
    <View style={styles.footerContainer}>
      <Button style={styles.button} icon={ArrowForwardIcon}></Button>
    </View>
  );

  const navigateCalendar = () => {
    navigation.navigate('MedicineInfo');
  };

  const navigateBack = () => {
    navigation.navigate('Home');
  };

  const navigateNext = () => {
    navigation.navigate('');
  };

  const {navigation} = props;

  const options = [
    {text: 'Comprimido(s)'},
    {text: 'Gota(s)'},
    {text: 'Mg'},
    {text: 'Ml'},
    {text: 'Unidade(s)'},
  ];

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
          <View style={styles.paneBorder}>
            <Text style={[styles.tittlePaneBorder, styles.text]}>
              {'Recipiente contém'}
            </Text>
            <Input
              style={styles.cardContent}
              placeholder="Quantidade"
              keyboardType="numeric"
            />
            <DropDownMenu name={'Unidade'} options={options} />
          </View>
          <View style={styles.paneContainer}>
            <Text style={styles.text}>{'Validade do \nMedicamento'}</Text>
            <DatepickerIcon />
          </View>
        </Card>
      </Layout>
    </SafeAreaView>
  );
}

export {medicineInfo};
