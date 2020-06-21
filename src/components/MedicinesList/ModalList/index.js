import React, {useState} from 'react';

import {View, Image, TouchableOpacity, Modal, Alert} from 'react-native';
import {Text, Layout, Divider, Icon, Button} from '@ui-kitten/components';

import styles from './../styles';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

// Icons
const clockIcon = style => (
    <Icon {...style} name="clock-outline" fill="#404040" width={37} height={36} />
);

const CheckmarkIcon = style => (
    <Icon {...style} name="checkmark" width={37} height={36} />
);

const navigateHome = (navigation) => {
    navigation.navigate('Home');
}

export const renderModalElement = (medicine) => (
    <View style={styles.modalView}>
      <View style={styles.colorMedicineModal} />
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.imageModal}
          />
          <View style={{flex: 1}}>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Icon name={'settings'} width={45} height={45} fill="#404040" />
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateHome(navigation)} style={{marginLeft: 15}}>
                <Icon name={'trash-2'} width={45} height={45} fill="#404040" />
              </TouchableOpacity>
            </View>
            <Text style={styles.titleModal}>{medicine.Name}</Text>
            <Text style={[styles.text, {textAlign: 'center'}]}>
              {medicine.Frequency}
            </Text>
          </View>
        </View>

        <View style={styles.infoContainerModal}>
          <View style={styles.contentContainer}>
            <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
            <Text style={styles.text}>
             {medicine.DosageQuantity + ' ' + medicine.DosageUnit}
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
            <Text style={styles.text}>{medicine.Instructions}                                                     .</Text>
          </View>
          <View style={styles.contentContainer}>
            <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
            <Text style={styles.text}>
              {'Tomar de ' + medicine.Frequency}
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Icon name={'alert-circle'} width={20} height={20} fill="#404040" />
            <Text style={styles.text}>{medicine.Obs}</Text>
          </View>
        </View>

        <View style={styles.buttonCantainer}>
          <View>
            <Button
              onPress={null}
              style={styles.buttonRadius}
              icon={clockIcon}
            />
            <Text style={[styles.textModalBtt, {marginLeft: -4}]}>
              Reagendar
            </Text>
          </View>
          <View>
            <Button
              onPress={toggleModal}
              style={styles.buttonRadiusYellow}
              icon={CheckmarkIcon}
            />
            <Text style={[styles.textModalBtt, {marginLeft: 10}]}>Tomar</Text>
          </View>
        </View>
      </View>
    </View>
  );