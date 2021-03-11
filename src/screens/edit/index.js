import React, { useState, Component } from 'react';
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


class EditScreen extends Component {


  constructor(props) {
    super(props);
    //Set initial state
  }

  state = {
      NameBackup: this.props.medicine.item.NameBackup,
      Name: this.props.medicine.item.Name,
      ContainerAmount: this.props.medicine.item.ContainerAmount,
      ContainerUnit: {text: ''},
      ExpirationDate: this.props.medicine.item.ExpirationDate,
      Color: this.props.medicine.item.Color,
      InitialDate: this.props.medicine.item.InitialDate,
      InitialHour: this.props.medicine.item.InitialHour,
      Frequency: {text: ''},
      DurationOfTreatmentType: {text: ''},
      DurationOfTreatmentNum: this.props.medicine.item.DurationOfTreatmentNum,
      DosageQuantity: this.props.medicine.item.DosageQuantity,
      DosageUnit: {text: ''},
      Instructions: {text: ''},
      Obs: this.props.medicine.item.Obs,
      Complete: true,
      
  }
  
  

  BackAction() {
    return (<TopNavigationAction icon={BackIcon} onPress={() => {}}/>)
  }; // Function "closeModalEdit()"

  renderSearchAction() {
    return (<TopNavigationAction icon={SearchIcon} />)
  };
  //const { medicine } = props;

  Header() { 
    return (
    <CardHeader
      titleStyle={styles.headerCard}
      title="Edite"
    />
  )};

  // Button next
  Footer() {
    return 
    (<View style={styles.footerContainer}>
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
    </View>)
  };

  navigateImagePicker() {

  }

  navigateMedicineInfo() {
    var isValidate = (this.state.Name != null &&
                      (Validate.validateNumber(this.state.ContainerAmount) || this.state.ContainerAmount == '')
                      /*Validate.validateName(DataMed.Name) &&
                      Validate.validateOption("ContainerUnit", DataMed.ContainerUnit.text) &&
                      Validate.validateDate(DataMed.ExpirationDate)*/
                      );

    //toggleTooltip(!isValidate);

    if (isValidate) {

      FirebaseService.editData(this.state.NameBackup, this.state);
      //setTooltipVisible(false);

      //navigation.navigate('TreatmentInfo');
    }
  };

  navigateBack() {

  };

  navigateNext() {

  };

  handleChangeDataMed(option) {
    
  };

  tooltipVisible = false;

  toggleTooltip(status) {
    this.tooltipVisible = status;
  };


  //const { modalEditIsOpen } = this.props.modalEdit; 
  render() {

    console.log(this.state);

    return (
      <SafeAreaView style={{flex: 1}}>
        <Layout style={styles.safeArea}>
          <TopNavigation
            title="Edição do Medicamento"
            titleStyle={{fontWeight: "bold"}}
            alignment="start"
            backgroundColor="white"
            leftControl={this.BackAction()}
          />
          <Divider />
        </Layout>
        <Divider />

        <Layout style={styles.container}>
            <ScrollView>
              <MagicMove.Scene>
              <MagicMove.View id="logo">
                  <Card style={styles.cardMain} header={this.Header} footer={() =>  
                (<View style={styles.footerContainer}>
                  <Button
                    onPress={this.navigateMedicineInfo()}
                    style={styles.buttonRadius}
                    icon={ArrowForwardIcon}>
                  </Button>
                </View>)}>
                      <View style={styles.cardBorder}>
                          <Input
                              style={styles.cardContainer}
                              placeholder="Nome do Medicamento"
                              id="email"
                              name="email"
                              autoComplete="on"
                              autoFocus
                              value={this.state.Name}
                              onChangeText={(value) => this.setState({
                                  Name: value,
                              })}
                          />  

                          <Button
                              appearance='outline'
                              style={styles.btnSection}
                              icon={CameraIcon}
                              onPress={this.navigateImagePicker()}
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
                          value={this.state.ContainerAmount}
                          onChangeText={(value) => this.setState({
                            ContainerAmount: value,
                        })}
                          />
                          <DropDownMenu
                          name={'Unidade'}
                          options={options}
                          selectedOption={this.state.ContainerUnit.text}
                          setSelectedOption={this.handleChangeDataMed('ContainerUnit')}
                          />
                      </View>

                      <View style={styles.paneContainer}>
                          <Text style={styles.text}>{'Validade do \nMedicamento'}</Text>
                          <DatepickerIcon
                          onSelect={(value) => this.setState({
                            ExpirationDate: value,
                        })}
                          date={this.state.ExpirationDate}
                          />
                      </View>

                      <View style={styles.paneContainer}>
                          <Text style={styles.text}>{'Cor do \nMedicamento'}</Text>
                          <ColorMenu
                          selectedColor={this.state.Color}
                          setSelectedColor={(value) => this.setState({
                            Color: value,
                        })}
                          />
                      </View>

                      <View style={[styles.paneBorder, {flexDirection: 'column'}, {marginTop: 20,}]}>
                          <Text style={[styles.titlePaneBorder, styles.text]}>
                              {'Duração'}
                          </Text>
                          <View style={styles.paneContainer}>
                              <Text style={styles.text}>{'Data de início'}</Text>
                              <DatepickerIcon
                              date={this.state.InitialDate}
                              onSelect={(value) => this.setState({
                                InitialDate: value,
                            })}
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
                              selectedOption={this.state.Frequency.text}
                              setSelectedOption={this.handleChangeDataMed('Frequency')}
                              />
                          </View>
                          <View style={styles.paneContainer}>
                              <Text style={styles.text}>{'Duração do\nTratamento'}</Text>
                              <View style={{flexDirection: 'row'}}>
                              <DropDownMenu
                                  name={'Dias'}
                                  options={optionsDuration}
                                  width={120}
                                  selectedOption={this.state.DurationOfTreatmentType.text}
                                  setSelectedOption={this.handleChangeDataMed('DurationOfTreatmentType')}
                              />
                              <Input
                                  value={this.state.DurationOfTreatmentNum}
                                  onChangeText={(value) => this.setState({
                                    DurationOfTreatmentNum: value,
                                })}
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
                              value={this.state.DosageQuantity}
                              onChangeText={(value) => this.setState({
                                DosageQuantity: value,
                            })}
                          />
                          <DropDownMenu
                              name={'Unidade'}
                              options={options}
                              controlStyle={{whidth: 300}}
                              selectedOption={this.state.DosageUnit.text}
                              setSelectedOption={this.handleChangeDataMed('DosageUnit')}
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
                              selectedOption={this.state.Instructions.text}
                              setSelectedOption={this.handleChangeDataMed('Instructions')}
                          />
                      </View>

                      <Input
                      placeholder="Digite as observações..."
                      style={[styles.cardContainer, {width: '100%'}]}
                      textStyle={{marginBottom: 40}}
                      multiline={true}
                      value={this.state.Obs}
                      onChangeText={(value) => this.setState({
                        Obs: value,
                    })}
                      />

                  </Card>
              </MagicMove.View>
              </MagicMove.Scene>
          </ScrollView>
        </Layout>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return { modalEdit: state.modalEdit };
}

export default connect(mapStateToProps, actions)(EditScreen);