import React, { Component } from 'react';
import {View, Image, Modal, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { connect } from 'react-redux';
import {Text, Icon, Button} from '@ui-kitten/components';

import * as actions from '../../../../actions';
import styles from './styles';

// Icons
const clockIcon = style => (
    <Icon {...style} name="clock-outline" fill="#404040" width={37} height={36} />
  );

const CheckmarkIcon = style => (
    <Icon {...style} name="checkmark" width={37} height={36} />
  );

const trashIcon = style => (
<Icon {...style} name="trash-2" width={45} height={45} fill="#404040"/>
);


class ModalMedicine extends Component {
    render() {

        //const { name, frequency, dosageQuantity, dosageUnit, instructions, obs } = this.props.medicine.item;
        const { modalIsOpen } = this.props.modal;

        return (
             
            <Modal
              transparent={true}
              visible={modalIsOpen}
              onRequestClose={() => this.props.closeModal()}
            >
                <TouchableOpacity
                    style={styles.centeredView}
                    activeOpacity={1}
                    onPressOut={() => this.props.closeModal()}>
                    <TouchableWithoutFeedback >
                      
                        <View style={styles.modalView}>
                            <View style={styles.colorMedicineModal} />
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <Image
                                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                                    style={styles.imageModal}
                                    />
                                    <View style={{flex: 1}}>
                                    <View style={styles.iconContainer}>
                                        {/* 
                                        <TouchableOpacity>
                                        <Icon name={'settings'} width={45} height={45} fill="#404040" />
                                        </TouchableOpacity>
                                        */} 
                                        <Button
                                        onPress={() => {
                                            navigateHome();
                                        }}
                                        appearance="ghost"
                                        icon={trashIcon}
                                        />
                                        {/* <TouchableOpacity onPress={() => {
                                        navigateHome();
                                        }} style={{marginLeft: 15}}>
                                        <Icon name={'trash-2'} width={45} height={45} fill="#404040" />
                                        </TouchableOpacity>*/}
                                    </View>
                                    <Text style={styles.titleModal}>{this.props.name}</Text>
                                    <Text style={[styles.text, {textAlign: 'center'}]}>
                                        {this.props.frequency}
                                    </Text>
                                    </View>
                                </View>
                    
                                <View style={styles.infoContainerModal}>
                                    <View style={styles.contentContainer}>
                                    <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
                                    <Text style={styles.text}>
                                    {this.props.dosageQuantity + ' ' + this.props.dosageUnit}
                                    </Text>
                                    </View>
                                    <View style={styles.contentContainer}>
                                    <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
                                    <Text style={styles.text}>{this.props.instructions}                                                     .</Text>
                                    </View>
                                    <View style={styles.contentContainer}>
                                    <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
                                    <Text style={styles.text}>
                                        {'Tomar de ' + this.props.frequency}
                                    </Text>
                                    </View>
                                    <View style={styles.contentContainer}>
                                    <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
                                    <Text style={styles.text}>{this.props.obs}</Text>
                                    </View>
                                </View>
                    
                                <View style={styles.buttonCantainer}>
                                    <View>
                                    <Button
                                        onPress={null}
                                        style={styles.buttonRadius}
                                        icon={clockIcon}
                                    />
                                    <Text style={[styles.textModalBtt, {marginLeft: -4}]}>
                                        Reagendar
                                    </Text>
                                    </View>
                                    <View>
                                    <Button
                                        onPress={() => this.props.closeModal()}
                                        style={styles.buttonRadiusYellow}
                                        icon={CheckmarkIcon}
                                    />
                                    <Text style={[styles.textModalBtt, {marginLeft: 10}]}>Tomar</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
         </Modal>
        )
    }
}

const mapStateToProps = state => {
    return { modal: state.modal };
}

export default connect(mapStateToProps, actions)(ModalMedicine);