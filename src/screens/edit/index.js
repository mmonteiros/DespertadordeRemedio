import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-navigation';
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

import {NavigationActions, StackActions} from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FirebaseService from '../../services/FirebaseService';
import Validate from './../../screens/registerMed/validateMedicine';
import * as MagicMove from 'react-native-magic-move';

import {DropDownMenu} from '../../components/Common/DropDownMenu';
import {DatepickerIcon} from '../../components/Common/DatePicker';
import {Time} from '../../components/Common/TimePicker';
import {options, optionsDuration, optionsFrequency, optionsInstruction} from '../../components/Common/DateOptions'

import { ArrowForwardIcon, BackIcon, CameraIcon, CheckmarkIcon, InfoIcon, SearchIcon } from '../../components/Common/Icons';
import ColorMenu from '../../screens/registerMed/medicineInfo/colorMenu';
import styles from './styles';


function EditScreen({navigation}, props) {

  const BackAction = () => (<TopNavigationAction icon={BackIcon} onPress={() => {}}/>); // Function "closeModalEdit()"
  const renderSearchAction = () => <TopNavigationAction icon={SearchIcon} />;

  const Header = () => (
    <CardHeader
      titleStyle={styles.headerCard}
      title="Edite"
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
    var isValidate = (DataMed.Name != null &&
                      (Validate.validateNumber(DataMed.ContainerAmount) || DataMed.ContainerAmount == '')
                      /*Validate.validateName(DataMed.Name) &&
                      Validate.validateOption("ContainerUnit", DataMed.ContainerUnit.text) &&
                      Validate.validateDate(DataMed.ExpirationDate)*/
                      );

    toggleTooltip(!isValidate);

    if (isValidate) {

      FirebaseService.editData(DataMed.Name, DataMed);
      setTooltipVisible(false);

      //navigation.navigate('TreatmentInfo');
    }
  };

  const navigateBack = () => {
    navigation.navigate('Loading');
  };

  const navigateNext = () => {
    navigation.navigate('');
  };

  const [DataMed, setDataMed] = useState({
    Name: '',
    ContainerAmount: '',
    ContainerUnit: {text: ''},
    ExpirationDate: null,
    Color: '#546de5',
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

  //const { modalEditIsOpen } = this.props.modalEdit; 

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.safeArea}>
        <TopNavigation
          title="Edição do Medicamento"
          titleStyle={{fontWeight: "bold"}}
          alignment="start"
          backgroundColor="white"
          leftControl={BackAction()}
        />
        <Divider />
      </Layout>
      <Divider />

      <Layout style={styles.container}>
          <ScrollView>
            <MagicMove.Scene>
            <MagicMove.View id="logo">
                <Card style={styles.cardMain} header={Header} footer={Footer}>
                    <View style={styles.cardBorder}>
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

                        <Button
                            appearance='outline'
                            style={styles.btnSection}
                            icon={CameraIcon}
                            onPress={navigateImagePicker}
                        >
                        </Button>
                    </View>

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

                    <View style={styles.paneContainer}>
                        <Text style={styles.text}>{'Cor do \nMedicamento'}</Text>
                        <ColorMenu
                        selectedColor={DataMed.Color}
                        setSelectedColor={handleChangeDataMed('Color')}
                        />
                    </View>

                    <View style={[styles.paneBorder, {flexDirection: 'column'}, {marginTop: 20,}]}>
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
            </MagicMove.View>
            </MagicMove.Scene>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return { modalEdit: state.modalEdit };
}

export default connect(mapStateToProps, actions)(EditScreen);