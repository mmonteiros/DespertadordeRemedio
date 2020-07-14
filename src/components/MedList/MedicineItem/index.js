import React, { Component , useState } from 'react';
import {View, Image, TouchableOpacity, Modal} from 'react-native';
import {Text, Divider, Icon} from '@ui-kitten/components';
import { connect } from 'react-redux';

import * as actions from '../../../actions';
import ModalMedicine from './ModalMedicine'
import styles from './styles';
import Alarm from '../../../services/Alarm';

class MedicineItem extends Component {

    renderModal() {
      const {medicine, indexMedicine} = this.props;
     
      if (indexMedicine != null) {
        
        return (
          <ModalMedicine 
          medicine={medicine} 
          name = {medicine.item.Name}
          frequency = {medicine.item.Frequency.text}
          dosageQuantity = {medicine.item.DosageQuantity}
          dosageUnit = {medicine.item.DosageUnit.text} 
          instructions = {medicine.item.Instructions.text}
          obs = {medicine.item.Obs}
          onPressDelete={() => this.props.medsDelete({ item })}/>    
        )
      }
    }

    render() {
      const {id} = this.props.medicine.item;
      const {selectMedicine} = this.props;
      
      return (
        <TouchableOpacity 
          style={styles.touchableOpacity}
          onPress={() => {
            this.props.openModal(),
            selectMedicine(id)
          }}
        >
          <Alarm medicine={medicine}/>
          {this.renderModal()}
          
          <View style={styles.container}>
            <View style={styles.colorMedicine} />
            <Image
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{this.props.name}</Text>
              <Text style={[styles.text, {textAlign: 'center'}]}>
                {this.props.frequency}
              </Text>
              <Divider style={styles.divider} />
              <View style={styles.contentContainer}>
                <Icon
                  name={'alert-circle'}
                  width={20}
                  height={20}
                  fill="#404040"
                />
                <Text style={styles.text}>
                  {this.props.dosageQuantity + ' ' + this.props.dosageUnit}
                </Text>
              </View>
              <View style={styles.contentContainer}>
                <Icon
                  name={'alert-circle'}
                  width={20}
                  height={20}
                  fill="#404040"
                />
                <Text style={styles.text}>{this.props.instructions}</Text>
              </View>
            </View>
          </View>
          
        </TouchableOpacity>
    )

  }
}

const mapStateToProps = (state, ownProps) => {
  let indexMedicine = null;

    if (state.selectedMedicineId === ownProps.medicine.item.id) {
      indexMedicine = ownProps.medicine.index;
    }

  return { indexMedicine, selectedMedicineId: state.selectedMedicineId };
}

export default connect(mapStateToProps, actions)(MedicineItem);