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

import {NavigationActions, StackActions} from 'react-navigation';
import firebaseConfig from '../../../firebase';
import Validate from './../validateMedicine';

import {DropDownMenu} from '../../../components/DropDownMenu';
import {DatepickerIcon} from '../../../components/DatePicker';
import styles from './styles';

// Icons
const ArrowForwardIcon = style => <Icon {...style} name="arrow-forward" />;
const BackIcon = style => <Icon {...style} name="arrow-back" />;
const SearchIcon = style => <Icon {...style} name="search-outline" />;
const CameraIcon = style => <Icon {...style} name="camera" />;

export default function medicineInfo({navigation}) {
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
    var isValidateName = Validate.validateName(DataMed.Name);
    setIsEmptyName(isValidateName);

    var isValidateContainerAmount = Validate.validateNumber(
      DataMed.ContainerAmount,
    );
    setIsEmptyContainerAmount(isValidateContainerAmount);

    if (isValidateName && isValidateContainerAmount) {
      firebaseConfig.setData(DataMed.Name, DataMed);

      setDataMed({
        ...DataMed,
        Name: '',
        ContainerAmount: '',
        ContainerUnit: {text: ''},
        ExpirationDate: null,
      });

      navigation.navigate('TreatmentInfo');
    }
  };

  const navigateBack = () => {
    navigation.navigate('Home');
  };

  const navigateNext = () => {
    navigation.navigate('');
  };

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
    ContainerUnit: {text: ''},
    ExpirationDate: null,
    Complete: false,
  });

  const handleChangeDataMed = name => event => {
    setDataMed({...DataMed, [name]: event});
  };

  const [isEmptyName, setIsEmptyName] = useState(true);
  const [isEmptyContainerAmount, setIsEmptyContainerAmount] = useState(true);

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
            status={isEmptyName ? 'success' : 'danger'}
            caption={isEmptyName ? '' : 'Por favor, insira o nome'}
            value={DataMed.Name}
            onChangeText={handleChangeDataMed('Name')}
          />
          <View style={styles.paneBorder}>
            <Text style={[styles.titlePaneBorder, styles.text]}>
              {'Recipiente contém'}
            </Text>
            <Input
              style={styles.cardContent}
              placeholder="Quantidade"
              keyboardType="numeric"
              status={isEmptyContainerAmount ? 'success' : 'danger'}
              caption={isEmptyContainerAmount ? '' : 'Insira um número valido'}
              value={DataMed.ContainerAmount}
              onChangeText={handleChangeDataMed('ContainerAmount')}
            />
            <DropDownMenu
              name={'Unidade'}
              options={options}
              selectedOption={DataMed.ContainerUnit.text}
              setSelectedOption={handleChangeDataMed('ContainerUnit')}
            />
          </View>
          <View style={styles.paneContainer}>
            <Text style={styles.text}>{'Validade do \nMedicamento'}</Text>
            <DatepickerIcon
              onSelect={handleChangeDataMed('ExpirationDate')}
              date={DataMed.ExpirationDate}
            />
          </View>
        </Card>
      </Layout>
    </SafeAreaView>
  );
}

export {medicineInfo};
