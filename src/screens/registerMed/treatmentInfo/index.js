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
import styles from '../medicineInfo/styles';

// Icons
const checkmarkIcon = style => (
  <Icon {...style} name="arrow-checkmark-outline" />
);
const BackIcon = style => <Icon {...style} name="arrow-back" />;
const SearchIcon = style => <Icon {...style} name="search-outline" />;

function treatmentInfo(props) {
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const renderSearchAction = () => <TopNavigationAction icon={SearchIcon} />;

  const Header = () => (
    <CardHeader headerStyle={styles.headerCard} title="Tratamento" />
  );

  // Button confirm
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

  const optionsDuration = [
    {text: 'Dia(s)'},
    {text: 'Semana(s)'},
    {text: 'Mês'},
    //{text: 'Data'},
  ];

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
        <View style={styles.paneBorder}>
          <View style={styles.paneContainer}>
            <Text style={styles.text}>{'Data de início'}</Text>
            <DatepickerIcon />
          </View>
          <View style={styles.paneContainer}>
            <Text style={styles.text}>{'Hora de início'}</Text>
            <DatepickerIcon />
          </View>
          <View style={styles.paneContainer}>
            <Text style={styles.text}>{'Frequência'}</Text>
            <DropDownMenu name={'------'} options={optionsFreqeuncy} />
          </View>
          <View style={styles.paneContainer}>
            <Text style={styles.text}>{'Duração do\nTratamento'}</Text>
            <DropDownMenu name={'Dias'} options={optionsDuration} />
            {/* Add condition*/}
          </View>
        </View>
        <View style={styles.paneBorder}>
          <Input
            style={styles.cardContent}
            placeholder="Quantidade"
            keyboardType="numeric"
          />
          <DropDownMenu name={'Unidade'} options={options} />
        </View>
        <View style={styles.paneBorder}>
          <DropDownMenu name={'Unidade'} options={optionsInstruction} />
        </View>
        <Input
          placeholder="Digite as observações..."
          style={styles.cardContainer}
        />
      </Layout>
    </SafeAreaView>
  );
}

export {treatmentInfo};
