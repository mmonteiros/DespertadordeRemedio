import React from 'react';

import {View, Image} from 'react-native';
import {Card, Text} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Product = ({product: {image, title, description, price}}) => (
  <Card style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={{uri: image}} style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  </Card>
);

export default Product;
