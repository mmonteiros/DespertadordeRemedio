import React, { Fragment, useState } from 'react';
import { View, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import { Button } from '@ui-kitten/components';

export default function ColorMenu ({selectedColor, setSelectedColor}) {
    
    const [visible, setVisible] = useState(false);
    
    return (
        <Fragment>
            <TouchableOpacity 
                style={[styles.container, {backgroundColor: selectedColor}]}
                onPress={() => setVisible(true)}
            />

            <Modal
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            >
                <TouchableOpacity
                    style={styles.centeredView}
                    activeOpacity={1}
                    onPressOut={() => setVisible(false)}>

                    <TouchableWithoutFeedback >
                    
                        <View style={styles.modalView}>
                            <View style={[styles.modalView, {flexDirection: "column"}]}>
                                <Button style={[styles.button, {backgroundColor: '#546de5'}]} onPress={() => {setSelectedColor('#546de5'), setVisible(false)}} />
                                <Button style={[styles.button, {backgroundColor: '#ff3838'}]} onPress={() => {setSelectedColor('#ff3838'), setVisible(false)}} />
                                <Button style={[styles.button, {backgroundColor: '#f5cd79'}]} onPress={() => {setSelectedColor('#f5cd79'), setVisible(false)}} />
                                <Button style={[styles.button, {backgroundColor: '#e15f41'}]} onPress={() => {setSelectedColor('#e15f41'), setVisible(false)}} />
                                <Button style={[styles.button, {backgroundColor: '#303952'}]} onPress={() => {setSelectedColor('#303952'), setVisible(false)}} />
                            </View>

                            {/* <View style={[styles.modalView, {flexDirection: "column"}]}>
                                <Button style={[styles.button, {backgroundColor: '#303952'}]} onPress={() => {setSelectedColor('#303952'), setVisible(false)}} />
                                <Button style={[styles.button, {backgroundColor: '#f78fb3'}]} onPress={() => {setSelectedColor('#f78fb3'), setVisible(false)}} />
                                <Button style={[styles.button, {backgroundColor: '#c44569'}]} onPress={() => {setSelectedColor('#c44569'), setVisible(false)}} />
                                <Button style={[styles.button, {backgroundColor: '#e66767'}]} onPress={() => {setSelectedColor('#e66767'), setVisible(false)}} />
                                <Button style={[styles.button, {backgroundColor: '#3ae374'}]} onPress={() => {setSelectedColor('#3ae374'), setVisible(false)}} />
                            </View> */}
                        </View>
                        
                    </TouchableWithoutFeedback>

                </TouchableOpacity>
            </Modal>
        </Fragment>
    )
}