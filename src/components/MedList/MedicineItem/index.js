import React, { Component , Fragment } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Divider, Icon } from '@ui-kitten/components';
import { connect } from 'react-redux';

import * as actions from '../../../actions';
import ModalMedicine from './ModalMedicine'
import styles from './styles';
import ModalEdit from './ModalMedicine/ModalEdit';

class MedicineItem extends Component {

    renderModal() {
      const {medicine, indexMedicine, medsDelete} = this.props;
     
      if (indexMedicine != null) {
        
        return (
          <ModalMedicine 
          medicine={medicine} 
          name = {medicine.item.Name}
          imageUrl = {medicine.item.imageUrl}
          frequency = {medicine.item.Frequency.text}
          dosageQuantity = {medicine.item.DosageQuantity}
          dosageUnit = {medicine.item.DosageUnit.text} 
          instructions = {medicine.item.Instructions.text}
          obs = {medicine.item.Obs}
          color = {medicine.item.Color}
          onPressDelete={() => medsDelete({ item })}/>    
        )
      }
    }

    renderModalEdit () {
      const { indexMedicine } = this.props;

      if (indexMedicine != null) {
        return (
            <ModalEdit />
        )
      }
    };

    showImage() {
      if(this.props.imageUrl){
        return {uri: this.props.imageUrl};
      }
      
      else{
        return require('./../../../screens/registerMed/medicineInfo/imagePicker/dummy.png');
      }
    }

    render() {
      const {medicine, selectMedicine, color} = this.props;
      
      return (
        <Fragment>
          <TouchableOpacity 
            style={styles.touchableOpacity}
            onPress={() => {
              this.props.openModal(),
              selectMedicine(medicine.item.id)
            }}
            onLongPress={() => {this.props.openModalEdit()}}
          >
            
            {this.renderModal()}
            {this.renderModalEdit()}
            
            <View style={styles.container}>
              <View style={{
                  backgroundColor: color,
                  height: '100%',
                  width: 20,}} />
              <Image
                source={this.showImage()}
                style={styles.image}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.title}>{this.props.name}</Text>
                <Text style={[styles.text, {textAlign: 'center'}]}>
                  {this.props.frequency}
                </Text>
                <Divider style={styles.divider} />
                <View style={styles.contentContainer}>
                  {(this.props.dosageQuantity || this.props.dosageUnit)? <Icon
                    name={'alert-circle'}
                    width={20}
                    height={20}
                    fill="#404040"
                  /> : null}
                  <Text style={styles.text}>
                    {this.props.dosageQuantity + ' ' + this.props.dosageUnit}
                  </Text>
                </View>
                <View style={styles.contentContainer}>
                {(this.props.instructions)? <Icon
                    name={'alert-circle'}
                    width={20}
                    height={20}
                    fill="#404040"
                  /> : null}
                  <Text style={styles.text}>{this.props.instructions}</Text>
                </View>
              </View>
            </View>
            
          </TouchableOpacity>

        </Fragment>
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