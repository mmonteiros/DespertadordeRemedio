import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
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
import {Time} from '../../../components/timePicker';
import styles from '../medicineInfo/styles';

// Icons
const CheckmarkIcon = style => <Icon {...style} name="checkmark" />;
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

  const navigateHome = () => {
    navigation.navigate('Home');
  };

  const navigateBack = () => {
    navigation.navigate('medicineInfo');
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

  const optionsDuration = [
    {text: 'Dia(s)'},
    {text: 'Semana(s)'},
    {text: 'Mês'},
    //{text: 'Data'},
  ];

  const optionsFrequency = [
    {text: 'Dia(s)'},
    {text: 'Semana(s)'},
    {text: 'Mês'},
  ];

  const optionsInstruction = [
    {text: 'Tomar em jejum'},
    {text: 'Antes das refeições'},
    {text: 'Durante as refeições'},
    {text: 'Após as refeições'},
    {text: 'Não tomar com ...'},
  ];

  const [DataMed, setDataMed] = useState({
    InitialDate: '',
    InitialHour: '',
    Frequency: '',
    DurationOfTreatment: '',
    DosageQuantity: '',
    DosageUnit: '',
    Instructions: '',
    Obs: '',
  });

  const handleChangeDataMed = name => event => {
		setDataMed({ ...DataMed,[name]: event });
	};

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.safeArea}>
        <TopNavigation
          title="Registar Medicamento"
          alignment="center"
          backgroundColor="white"
          leftControl={BackAction()}
          rightControls={renderSearchAction()}
        />
        <Divider />
      </Layout>
      <Divider />
      <Layout style={styles.container}>
        <ScrollView>
          <Card style={styles.cardMain} header={Header}>
            <View style={[styles.paneBorder, {flexDirection: 'column'}]}>
              <Text style={[styles.tittlePaneBorder, styles.text]}>
                {'Duração'}
              </Text>
              <View style={styles.paneContainer}>
                <Text style={styles.text}>{'Data de início'}</Text>
                <DatepickerIcon />
              </View>
              <View style={styles.paneContainer}>
                <Text style={styles.text}>{'Hora de início'}</Text>
                <Time />
              </View>
              <View style={styles.paneContainer}>
                <Text style={styles.text}>{'Frequência'}</Text>
                <DropDownMenu name={'------'} options={optionsFrequency} />
              </View>
              <View style={styles.paneContainer}>
                <Text style={styles.text}>{'Duração do\nTratamento'}</Text>
                <DropDownMenu name={'Dias'} options={optionsDuration} />
                {/* Add condition*/}
              </View>
            </View>
            <View style={styles.paneBorder}>
              <Text style={[styles.tittlePaneBorder, styles.text]}>
                {'Dosagem'}
              </Text>
              <Input
                style={styles.cardContent}
                placeholder="Quantidade"
                keyboardType="numeric"
              />
              <DropDownMenu
                name={'Unidade'}
                options={options}
                controlStyle={{whidth: 300}}
              />
            </View>
            <View style={styles.paneBorder}>
              <Text style={[styles.tittlePaneBorder, styles.text]}>
                {'Instruções'}
              </Text>
              <DropDownMenu
                name={'Escolha a instrução...'}
                options={optionsInstruction}
              />
            </View>
            <Input
              placeholder="Digite as observações..."
              style={styles.cardContainer}
            />
          </Card>
          <View style={styles.buttonMargin}>
            <Button
              onPress={navigateHome}
              icon={CheckmarkIcon}
              style={styles.buttonRadius}></Button>
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
}

export {treatmentInfo};
