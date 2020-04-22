import React, {useState} from 'react';

import {View, Image, TouchableOpacity, Modal, Alert} from 'react-native';
import {Text, Layout, Divider, Icon, Button} from '@ui-kitten/components';

import firebaseConfig from '../../firebase';

import styles from './styles';

// Icons
const bellIcon = style => (
  <Icon {...style} name="bell" fill="#404040" width={37} height={36} />
);
const CheckmarkIcon = style => (
  <Icon {...style} name="checkmark" width={37} height={36} />
);

export default function MedicineList() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const renderModalElement = () => (
    <View style={styles.centeredView}>
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
                  <Icon
                    name={'settings'}
                    width={45}
                    height={45}
                    fill="#404040"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={[{marginLeft: 15}, {marginRight: 5}]}>
                  <Icon
                    name={'trash-2'}
                    width={45}
                    height={45}
                    fill="#404040"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.titleModal}>Title</Text>
              <Text style={[styles.text, {textAlign: 'center'}]}>
                Medicne Frequency
              </Text>
            </View>
          </View>

          <View style={styles.infoContainerModal}>
            <View style={styles.contentContainer}>
              <Icon
                name={'alert-circle'}
                width={20}
                height={20}
                fill="#404040"
              />
              <Text style={styles.text}>
                {'medicine.DosageQuantity' + ' ' + 'medicine.DosageUnit.text'}
              </Text>
            </View>
            <View style={styles.contentContainer}>
              <Icon
                name={'alert-circle'}
                width={20}
                height={20}
                fill="#404040"
              />
              <Text style={styles.text}>{'medicine.Instructions.text'}</Text>
            </View>
            <View style={styles.contentContainer}>
              <Icon
                name={'alert-circle'}
                width={20}
                height={20}
                fill="#404040"
              />
              <Text style={styles.text}>
                {'Tomar de ' + 'medicine.frequency'}
              </Text>
            </View>
            <View style={styles.contentContainer}>
              <Icon
                name={'alert-circle'}
                width={20}
                height={20}
                fill="#404040"
              />
              <Text style={styles.text}>{'Observações'}</Text>
            </View>
          </View>

          <View style={styles.buttonCantainer}>
            <Button
              onPress={null}
              style={styles.buttonRadius}
              icon={bellIcon}
            />
            <Button
              onPress={toggleModal}
              style={styles.buttonRadiusYellow}
              icon={CheckmarkIcon}
            />
          </View>
        </View>
      </View>
    </View>
  );

  const showList = medicine => {
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
              transparent={true}
              visible={modalVisible}
              onBackdropPress={toggleModal}>
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
        .map(medicine => showList(medicine))}
    </View>
  );
}
