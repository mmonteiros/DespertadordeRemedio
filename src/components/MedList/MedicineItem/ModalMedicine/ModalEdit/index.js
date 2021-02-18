import React, { Component, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { View, Modal, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';

import * as actions from '../../../../../actions';
import EditScreen from '../../../../../screens/edit';

class ModalEdit extends Component {

    render () {
        const { modalEditIsOpen } = this.props.modalEdit;

        return (
            <View>
                <Modal
                transparent={true}
                visible={modalEditIsOpen}
                onRequestClose={() => this.props.closeModalEdit()}
            >
                    <EditScreen />
                </Modal>
            </View>
        )    
    }
    
}

const mapStateToProps = state => {
    return { modalEdit: state.modalEdit };
}

export default connect(mapStateToProps, actions)(ModalEdit);