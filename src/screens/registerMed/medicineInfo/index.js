import React, {useState} from 'react';
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

import firebase from 'react-native-firebase';
import firebaseConfig from '../../../firebase';

import {DropDownMenu} from '../../../components/DropDownMenu';
import {DatepickerIcon} from '../../../components/DatePicker';
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
      <Button
        onPress={navigateMedicineInfo}
        style={styles.buttonRadius}
        icon={ArrowForwardIcon}></Button>
    </View>
  );

  const navigateMedicineInfo = () => {
    if(DataMed.Name.length > 0) firebaseConfig.setData(DataMed.Name, DataMed);
    navigation.navigate('treatmentInfo');
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

  const [DataMed, setDataMed] = useState({
    Name: '',
    ContainerAmount: '',
    ContainerUnit: null,
    ExpirationDate: null,
  });

  const handleChangeDataMed = name => event => {
    setDataMed({...DataMed, [name]: event});
  };

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
            value={DataMed.Name}
            onChangeText={handleChangeDataMed('Name')}
          />
          <View style={styles.paneBorder}>
            <Text style={[styles.tittlePaneBorder, styles.text]}>
              {'Recipiente contém'}
            </Text>
            <Input
              style={styles.cardContent}
              placeholder="Quantidade"
              keyboardType="numeric"
              value={DataMed.ContainerAmount}
              onChangeText={handleChangeDataMed('ContainerAmount')}
            />
            <DropDownMenu name={'Unidade'} options={options} selectedOption={DataMed.ContainerUnit} setSelectedOption={handleChangeDataMed('ContainerUnit')}/>
          </View>
          <View style={styles.paneContainer}>
            <Text style={styles.text}>{'Validade do \nMedicamento'}</Text>
            <DatepickerIcon  onSelect={handleChangeDataMed('ExpirationDate')} date={DataMed.ExpirationDate}   />
          </View>
        </Card>
      </Layout>
    </SafeAreaView>
  );
}

export {medicineInfo};
