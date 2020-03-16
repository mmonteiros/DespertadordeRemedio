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
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$50,00',
      },
      {
        id: 2,
        image:
          'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
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
