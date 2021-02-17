import React, {Children, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView, NavigationActions, StackActions} from 'react-navigation';
import {
  Divider,
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

import {DropDownMenu} from '../../../components/Common/DropDownMenu';
import {DatepickerIcon} from '../../../components/Common/DatePicker';
import {Time} from '../../../components/Common/TimePicker';
import FirebaseService from '../../../services/FirebaseService';
import RNRestart from 'react-native-restart'; // Import package from node modules
import Validate from './../validateMedicine'
import {options, optionsDuration, optionsFrequency, optionsInstruction} from '../../../components/Common/DateOptions'

import {BackIcon, CheckmarkIcon, InfoIcon, SearchIcon} from '../../../components/Common/Icons';
import styles from '../medicineInfo/styles';

function treatmentInfo({ navigation }) {
  
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const renderSearchAction = () => <TopNavigationAction icon={SearchIcon} />;

  const Header = () => (
    <CardHeader headerStyle={styles.headerCard} title="Tratamento" />
  );

  const navigateHome = () => {

    var isValidate = (
                      Validate.validateNumber(DataMed.DurationOfTreatmentNum) && 
                      (DataMed.InitialDate != '') &&
                      Validate.validateOption("Frequency", DataMed.Frequency.text) &&
                      Validate.validateOption("DurationOfTreatmentType", DataMed.DurationOfTreatmentType.text) &&
                      Validate.validateInitialHour()
                      );

    toggleTooltip(!isValidate);

    if (isValidate) { 

      FirebaseService.updateData(DataMed);

      setTooltipVisible(false);

      RNRestart.Restart();
    }
  };

  const navigateBack = () => {
    navigation.goBack(null);
  };

  const navigateNext = () => {
    navigation.navigate('');
  };

  const [DataMed, setDataMed] = useState({
    InitialDate: '',
    InitialHour: '',
    Frequency: {text: ''},
    DurationOfTreatmentType: {text: ''},
    DurationOfTreatmentNum: '',
    DosageQuantity: '',
    DosageUnit: {text: ''},
    Instructions: {text: ''},
    Obs: '',
    Complete: true,
  });

  const handleChangeDataMed = name => event => {
    setDataMed({...DataMed, [name]: event});
  };

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const toggleTooltip = (status) => {
    setTooltipVisible(status);
  };

  console.log(DataMed);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.safeArea}>
        <TopNavigation
          title="Registar Medicamento"
          alignment="start"
          backgroundColor="white"
          leftControl={BackAction()}
        />
        <Divider />
      </Layout>
      <Divider />
      <Layout style={styles.container}>
        <ScrollView>
          <Card style={styles.cardMain} header={Header}>
            <View style={[styles.paneBorder, {flexDirection: 'column'}]}>
              <Text style={[styles.titlePaneBorder, styles.text]}>
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
                  name={'- - - - - - - -'}
                  options={optionsFrequency}
                  selectedOption={DataMed.Frequency.text}
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
                    selectedOption={DataMed.DurationOfTreatmentType.text}
                    setSelectedOption={handleChangeDataMed('DurationOfTreatmentType')}
                  />
                  <Input
                    value={DataMed.DurationOfTreatmentNum}
                    onChangeText={handleChangeDataMed('DurationOfTreatmentNum')}
                    style={[styles.cardContent, {width: 70}]}
                    placeholder="- - -"
                    keyboardType="numeric"
                  />
                </View>
                {/* Add condition*/}
              </View>
            </View>
            <View style={styles.paneBorder}>
              <Text style={[styles.titlePaneBorder, styles.text]}>
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
                selectedOption={DataMed.DosageUnit.text}
                setSelectedOption={handleChangeDataMed('DosageUnit')}
              />
            </View>
            <View style={styles.paneBorder}>
              <Text style={[styles.titlePaneBorder, styles.text]}>
                {'Instruções'}
              </Text>
              <DropDownMenu
                name={'Escolha a instrução...'}
                options={optionsInstruction}
                style={styles.instruction}
                width={330}
                selectedOption={DataMed.Instructions.text}
                setSelectedOption={handleChangeDataMed('Instructions')}
              />
            </View>
            <Input
              placeholder="Digite as observações..."
              style={[styles.cardContainer, {width: '100%'}]}
              textStyle={{marginBottom: 40}}
              multiline={true}
              value={DataMed.Obs}
              onChangeText={handleChangeDataMed('Obs')}
            />
          </Card>
          <View style={styles.buttonMargin}>
          <Tooltip
            visible={tooltipVisible}
            text='Preencha todos os dados corretamente'
            icon={InfoIcon}
            onBackdropPress={toggleTooltip}
            placement={"left"}>
            <Button
              onPress={navigateHome}
              icon={CheckmarkIcon}
              style={styles.buttonRadius}></Button>
          </Tooltip>
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
}

export {treatmentInfo};
