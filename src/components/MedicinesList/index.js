import React, {useState} from 'react';

import {View, Image, TouchableOpacity, Modal, Alert} from 'react-native';
import {Text, Layout, Divider, Icon} from '@ui-kitten/components';

import firebaseConfig from '../../firebase';

import styles from './styles';

export default function MedicineList() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const renderModalElement = () => (
    <Layout level="3" style={{flex: 1}}>
      <Text>Hi! This is modal.</Text>
      <Text>Hi! This is modal.</Text>
      <Text>Hi! This is modal.</Text>
    </Layout>
  );

  const showList = (medicine) => {
    if (medicine.Complete) {
      return (
        <TouchableOpacity
          key={medicine.id}
          onPress={() => {
            setModalVisible(true);
          }}>
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
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onBackdropPress={toggleModal}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              {renderModalElement()}
            </Modal>
          </Layout>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View>
      {firebaseConfig
        .getMedicineUserDataFirestore()
        .map((medicine) => showList(medicine))}
    </View>
  );
}
