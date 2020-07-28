import React, { Component, useState, useEffect } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import pushNotifications from '../PushNotification';
import { format, addMinutes, addHours, isBefore } from 'date-fns'

import styles from './styles';


export default function Alarm (props) {
    const now = new Date();
    const hoursAlarms = [];

    const frequency = parseInt(props.frequency);
    const localyNotification = new pushNotifications();
    localyNotification.configure();

    useEffect(() => {
        setAlarm()
    })

    const setDate = () => {
        // Convert the string and split
        const date = props.initialHour;
        const dateSplit = date.split(':');

        // Set initial hour on object Date()
        const time = new Date();
        time.setHours(dateSplit[0], dateSplit[1], 0);

        return time;
    }

    const nextHour = (initialHour) => {
        
        // Case the frequency is equal to 24, don't need a repetition structure
        if (frequency === 24) {
            
            hoursAlarms[0] = initialHour
            hoursAlarms[1] = addHours(initialHour, frequency)
            
            if (isBefore(now, initialHour)) {
                return hoursAlarms[0];
            } else {
                return hoursAlarms[1];
            }
        }

        // Calculates the time of the alarms
        for (let index = 0; index < 24/frequency; index++) {

            hoursAlarms[index] = initialHour;
            initialHour = addHours(initialHour, frequency)

        }
        
        // Check next alarm
        for (let index = 0; index < 24/frequency; index++) {
            if (isBefore(now, hoursAlarms[index])) {
                return hoursAlarms[index];
            }
        }

        console.log('\n')
    }

    const setAlarm = () => {
        const initialHour = setDate();
        const alarmHour = nextHour(initialHour);

        console.log("Next Alarm Hour - " + alarmHour)

        localyNotification.alarmNotification(
            props.name,
            props.instructions,
            frequency,
            alarmHour,
            {}
        )

    }

    return null;
    // (
    //        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    //            <Text>{"Next Alarm Hour - "}</Text>
    //        </ScrollView>
    // )
}
