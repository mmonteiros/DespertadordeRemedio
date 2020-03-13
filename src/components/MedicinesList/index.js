import React, {Component} from 'react';

import {View} from 'react-native';

import Medicine from './Medicine';

import styles from './styles';

export default class MedicineList extends Component {
  state = {
    medicines: [
      {
        id: 1,
        image:
          'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=28010875',
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

  render() {
    return (
      <View style={styles.container}>
        {this.state.medicines.map(medicine => (
          <Medicine key={medicine.id} product={medicine} />
        ))}
      </View>
    );
  }
}
