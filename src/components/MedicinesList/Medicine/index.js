import React from 'react';

import {View, Image} from 'react-native';
import {Text, Layout, Divider, Icon, Card} from '@ui-kitten/components';

import styles from './styles';

const Product = ({
  product: {image, title, frequency, dosage, Instructions},
}) => (
  <Layout style={styles.container}>
    <Image source={{uri: image}} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.text, {textAlign: 'center'}]}>{frequency}</Text>
      <Divider style={styles.divider} />
      <View style={styles.contentContainer}>
        <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
        <Text style={styles.text}>{dosage}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
        <Text style={styles.text}>{Instructions}</Text>
      </View>
    </View>
  </Layout>
);

export default Product;
