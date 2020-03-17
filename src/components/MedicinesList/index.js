import React, {Component} from 'react';

import {View} from 'react-native';

import Medicine from './Medicine';

import styles from './styles';

export const MedicineList = () => {
  state = {
    medicines: [
      {
        id: 1,
        image: 'https://reactnative.dev/img/tiny_logo.png',
        title: 'Otomicina',
        frequency: '6h em 6h',
        dosage: '2 ' + 'gotas',
        Instructions: 'Diretamente no ouvido',
      },
      {
        id: 2,
        image:
          'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Pantoprazol',
        frequency: 'Diariamente',
        dosage: '1 ' + 'Comprimido',
        Instructions: 'Em jejum - Ao acordar',
      },
    ],
  };

  return (
    <View style={styles.container}>
      {this.state.medicines.map(medicine => (
        <Medicine key={medicine.id} product={medicine} />
      ))}
    </View>
  );
};
export default MedicineList;
