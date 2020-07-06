import React, {useState, Component} from 'react';
import {View, Image, TouchableOpacity, Modal, Alert, FlatList} from 'react-native';
import {Text, Layout, Divider, Icon, Button} from '@ui-kitten/components';

import firebaseConfig from '../../../firebase';

import styles from './styles';

class MedicineItem extends Component {

    render() {

      //console.log(this.props.medicine.item.name)

      return (
        <TouchableOpacity style={styles.touchableOpacity}>
          <View style={styles.container}>
            <View style={styles.colorMedicine} />
            <Image
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{this.props.medicine.item.name}</Text>
              <Text style={[styles.text, {textAlign: 'center'}]}>
                {this.props.medicine.item.frequency}
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
                  {this.props.medicine.item.dosageQuantity + ' ' + this.props.medicine.item.dosageUnit}
                </Text>
              </View>
              <View style={styles.contentContainer}>
                <Icon
                  name={'alert-circle'}
                  width={20}
                  height={20}
                  fill="#404040"
                />
                <Text style={styles.text}>{this.props.medicine.item.instructions}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    )

    }
}

export default MedicineItem;