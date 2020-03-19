import React from 'react';

import {View, Image} from 'react-native';
import {Text, Layout, Divider, Icon} from '@ui-kitten/components';

import styles from './styles';

function Product(product) {

  return (
  <Layout style={styles.container}>
    <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{"" + product.Name}</Text>
      <Text style={[styles.text, {textAlign: 'center'}]}>{""+product.Frequency}</Text>
      <Divider style={styles.divider} />
      <View style={styles.contentContainer}>
        <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
        <Text style={styles.text}>{product.DosageQuantity+ " " + product.DosageUnit}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
        <Text style={styles.text}>{""+ product.Instructions}</Text>
      </View>
    </View>
  </Layout>
  )
}

export default Product;
