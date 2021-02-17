import React, { Component, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { View, Modal, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';

import * as actions from '../../../../../actions';
import { EditScreen } from '../../../../../screens/edit';

import styles from './styles';

export default function ModalEdit () {
    const [visible, setVisible] = useState(true)

    return (
        <View>
            <Modal
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(false)}
        >
                <EditScreen />
            </Modal>
        </View>    

    )
}

export {ModalEdit}