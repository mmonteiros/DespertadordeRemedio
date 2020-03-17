import React, {Children, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView, NavigationActions, StackActions} from 'react-navigation';

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

import {DropDownMenu} from '../../../components/DropDownMenu';
import {DatepickerIcon} from '../../../components/DatePicker';
import {Time} from '../../../components/TimePicker';
import {ModalWithBackdrop} from '../../../components/Modal';
import styles from '../medicineInfo/styles';
import firebaseConfig from '../../../firebase';


// Icons
const CheckmarkIcon = style => <Icon {...style} name="checkmark" />;
const BackIcon = style => <Icon {...style} name="arrow-back" />;
const SearchIcon = style => <Icon {...style} name="search-outline" />;

function treatmentInfo({ navigation }) {
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const renderSearchAction = () => <TopNavigationAction icon={SearchIcon} />;

  const Header = () => (
    <CardHeader headerStyle={styles.headerCard} title="Tratamento" />
  );

  const navigateHome = () => {
    if (DataMed.Obs.length > 0) firebaseConfig.updateData(DataMed);

    navigation.navigate('Home');
  };

  const navigateBack = () => {
    navigation.navigate('medicineInfo');
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

  const optionsDuration = [
    {text: 'Dia(s)'},
    {text: 'Semana(s)'},
    {text: 'Mês'},
    //{text: 'Data'},
  ];

  const optionsFrequency = [
    {text: '4h em 4h'},
    {text: '6h em 6h'},
    {text: '8h em 8h'},
    {text: '12h em 12h'},
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
    DurationOfTreatmentType: '',
    DurationOfTreatmentNum: '',
    DosageQuantity: '',
    DosageUnit: '',
    Instructions: '',
    Obs: '',
  });

  const handleChangeDataMed = name => event => {
    setDataMed({...DataMed, [name]: event});
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
                <DatepickerIcon
                  date={DataMed.InitialDate}
                  onSelect={handleChangeDataMed('InitialDate')}
                />
              </View>
              <View style={styles.paneContainer}>
                <Text style={styles.text}>{'Hora de início'}</Text>
                <Time />
              </View>
              <View style={styles.paneContainer}>
                <Text style={styles.text}>{'Frequência'}</Text>
                <DropDownMenu
                  name={'- - - - - - - - - -'}
                  options={optionsFrequency}
                  selectedOption={DataMed.Frequency}
                  setSelectedOption={handleChangeDataMed('Frequency')}
                />
              </View>
              <View style={styles.paneContainer}>
                <Text style={styles.text}>{'Duração do\nTratamento'}</Text>
                <View style={{flexDirection: 'row'}}>
                  <DropDownMenu
                    name={'Dias'}
                    options={optionsDuration}
                    width={120}
                    selectedOption={DataMed.DurationOfTreatmentType}
                    setSelectedOption={handleChangeDataMed('DurationOfTreatmentType')}
                  />
                  <Input
                    value={DataMed.DurationOfTreatmentNum}
                    onChangeText={handleChangeDataMed('DurationOfTreatmentNum')}
                    style={[styles.cardContent, {width: 70}]}
                    placeholder="- - - - - -"
                    keyboardType="numeric"
                  />
                </View>
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
                value={DataMed.DosageQuantity}
                onChangeText={handleChangeDataMed('DosageQuantity')}
              />
              <DropDownMenu
                name={'Unidade'}
                options={options}
                controlStyle={{whidth: 300}}
                selectedOption={DataMed.DosageUnit}
                setSelectedOption={handleChangeDataMed('DosageUnit')}
              />
            </View>
            <View style={styles.paneBorder}>
              <Text style={[styles.tittlePaneBorder, styles.text]}>
                {'Instruções'}
              </Text>
              <DropDownMenu
                name={'Escolha a instrução...'}
                options={optionsInstruction}
                style={styles.instruction}
                width={330}
                selectedOption={DataMed.Instructions}
                setSelectedOption={handleChangeDataMed('Instructions')}
              />
            </View>
            <Input
              placeholder="Digite as observações..."
              style={styles.cardContainer}
              textStyle={{marginBottom: 40}}
              value={DataMed.Obs}
              onChangeText={handleChangeDataMed('Obs')}
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
