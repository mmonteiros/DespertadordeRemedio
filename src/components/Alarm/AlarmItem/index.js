import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { format, isEqual } from 'date-fns'

import styles from './styles'


export default function AlarmItem (props) {

    const {dataHours, nextAlarmHour} = props;

    return (
        <View style={[isEqual(nextAlarmHour, dataHours)?  styles.contentNextHour : styles.container]}>
            <Text 
                style={styles.content}>
                    {format(dataHours, 'HH:mm')}
            </Text>
        </View>
    )
}