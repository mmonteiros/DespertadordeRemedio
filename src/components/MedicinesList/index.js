import React from 'react';

import {View, Image, TouchableOpacity} from 'react-native';
import {Text, Layout, Divider, Icon, Modal} from '@ui-kitten/components';

import firebaseConfig from '../../firebase';

import styles from './styles';

const onPress = () => <Modal />;

export default function MedicineList() {
  const showList = (medicine, id) => {
    if (medicine.Complete) {
      return (
        <TouchableOpacity onPress={onPress}>
          <Layout style={styles.container}>
            <View style={styles.colorMedicine} />
            <Image
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{medicine.Name}</Text>
              <Text style={[styles.text, {textAlign: 'center'}]}>
                {medicine.Frequency.text}
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
                  {medicine.DosageQuantity + ' ' + medicine.DosageUnit.text}
                </Text>
              </View>
              <View style={styles.contentContainer}>
                <Icon
                  name={'alert-circle'}
                  width={20}
                  height={20}
                  fill="#404040"
                />
                <Text style={styles.text}>{medicine.Instructions.text}</Text>
              </View>
            </View>
          </Layout>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View>
      {firebaseConfig
        .getMedicineUserDataFirestore()
        .map((medicine, id) => showList(medicine, id))}
    </View>
  );
}
