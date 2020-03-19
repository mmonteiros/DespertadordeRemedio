import React from 'react';

import {View, Image} from 'react-native';
import {Text, Layout, Divider, Icon} from '@ui-kitten/components';

import firebaseConfig from '../../firebase'

import styles from './styles';

export default function MedicineList(){

  return (
    <View>
      {firebaseConfig.getMedicineUserDataFirestore().map((medicine, index) => (
        <Layout style={styles.container}>
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{medicine.Name}</Text>
          <Text style={[styles.text, {textAlign: 'center'}]}>{medicine.Frequency.text}</Text>
          <Divider style={styles.divider} />
          <View style={styles.contentContainer}>
            <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
            <Text style={styles.text}>{medicine.DosageQuantity+ " " + medicine.DosageUnit.text}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
            <Text style={styles.text}>{medicine.Instructions.text}</Text>
          </View>
        </View>
      </Layout>
      ))}
    </View>
  );
};
