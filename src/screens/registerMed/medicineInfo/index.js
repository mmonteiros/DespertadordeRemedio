import React, {useState, useEffect} from 'react';
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
  Tooltip,
} from '@ui-kitten/components';

import {NavigationActions, StackActions} from 'react-navigation';
import firebaseConfig from '../../../firebase';
import Validate from './../validateMedicine';

import {DropDownMenu} from '../../../components/DropDownMenu';
import {DatepickerIcon} from '../../../components/DatePicker';
import * as MagicMove from 'react-native-magic-move';
import styles from './styles';

// Icons
const ArrowForwardIcon = style => <Icon {...style} name="arrow-forward" />;
const BackIcon = style => <Icon {...style} name="arrow-back" />;
const SearchIcon = style => <Icon {...style} name="search-outline" />;
const CameraIcon = style => <Icon {...style} name="camera" />;
const InfoIcon = style => <Icon {...style} name='info'/>;

export default function medicineInfo({navigation}) {
  const BackAction = () => (<TopNavigationAction icon={BackIcon} onPress={navigateBack}/>);

  const renderSearchAction = () => <TopNavigationAction icon={SearchIcon} />;

  const Header = () => (
    <CardHeader
      titleStyle={styles.headerCard}
      title="Informações do Medicamento"
    />
  );

  // Button next
  const Footer = () => (
    <View style={styles.footerContainer}>
      <Tooltip
            visible={tooltipVisible}
            text='Preencha todos os dados corretamente'
            icon={InfoIcon}
            onBackdropPress={toggleTooltip}
            placement={"left"}>
      <Button
        onPress={navigateMedicineInfo}
        style={styles.buttonRadius}
        icon={ArrowForwardIcon}>
      </Button>
      </Tooltip>
    </View>
  );

  const navigateImagePicker = () => {
    navigation.navigate('ImagePicker');
  }

  const navigateMedicineInfo = () => {
    var isValidate = (
                      Validate.validateName(DataMed.Name) &&
                      Validate.validateNumber(DataMed.ContainerAmount) &&
                      Validate.validateOption("ContainerUnit", DataMed.ContainerUnit.text) &&
                      Validate.validateDate(DataMed.ExpirationDate) 
                      );

    toggleTooltip(!isValidate);

    if (isValidate) {
      firebaseConfig.setData(DataMed.Name, DataMed);

      setDataMed({
        ...DataMed,
        Name: '',
        ContainerAmount: '',
        ContainerUnit: {text: ''},
        ExpirationDate: null,
      });

      setTooltipVisible(false);

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

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const toggleTooltip = (status) => {
    setTooltipVisible(status);
  };


  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.safeArea}>
        <TopNavigation
          title="Registar Medicamento"
          titleStyle={{fontWeight: "bold"}}
          alignment="start"
          backgroundColor="white"
          leftControl={BackAction()}
        />
        <Divider />
      </Layout>
      <Divider />
      <Layout style={styles.container}>
        <MagicMove.Scene>
          <MagicMove.View id="logo">
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
            <Text style={[styles.titlePaneBorder, styles.text]}>
              {'Recipiente contém'}
            </Text>
            <Input
              style={styles.cardContent}
              placeholder="Quantidade"
              keyboardType="numeric"
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
        </MagicMove.View>
        </MagicMove.Scene>
      </Layout>
    </SafeAreaView>
  );
}

export {medicineInfo};
