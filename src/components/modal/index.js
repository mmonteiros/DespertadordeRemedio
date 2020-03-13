import React from 'react';
import {Button, Layout, Modal, Text} from '@ui-kitten/components';

import styles from './styles';

export const ModalWithBackdrop = ({tittle}) => {
  const [visible, setVisible] = React.useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const renderModalElement = () => (
    <Layout level="3" style={styles.modalContainer}>
      <Text>Hi! This is modal.</Text>
      <Text>Hi! This is modal.</Text>
      <Text>Hi! This is modal.</Text>
    </Layout>
  );

  return (
    <Layout style={styles.container}>
      <Button
        onPress={toggleModal}
        style={styles.buttonContainer}
        textStyle={styles.buttonText}>
        - - - - - - - v
      </Button>
      <Modal
        backdropStyle={styles.backdrop}
        onBackdropPress={toggleModal}
        visible={visible}>
        {renderModalElement()}
      </Modal>
    </Layout>
  );
};
