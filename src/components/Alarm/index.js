import React, { Component, useState, useEffect } from 'react';
import pushNotifications from '../PushNotification';
import { format, addMinutes, addHours, isBefore } from 'date-fns'
import BackgroundTimer from 'react-native-background-timer';


export default function Alarm (props) {
    const registerHour = new Date();
    const frequency = parseInt(props.frequency);
    const localyNotification = new pushNotifications();
    localyNotification.configure();

    useEffect(() => {
        setAlarm()
    })

    const setDate = () => {
        // Converte for string and split
        const date = props.initialHour;
        const dateSplit = date.split(':');

        // Set initial hour on object Date()
        const time = new Date();
        time.setHours(dateSplit[0], dateSplit[1], 0);
        
        return time;
    }

    const nextHour = (initialHour) => {

        const hoursAlarms = [];

        // Calculates the time of the alarms
        for (let index = 0; index < 24/frequency; index++) {
            hoursAlarms[index] = initialHour;
            initialHour = addHours(initialHour, frequency)
        }
        
        // Check next alarm
        for (let index = 0; index < 24/frequency; index++) {
            if (isBefore(registerHour, hoursAlarms[index])) {
                return hoursAlarms[index];
            }
        }
    }

    const setAlarm = () => {
        const initialHour = setDate();
        const alarmHour = nextHour(initialHour);

        // const alarmHour = new Date()
        // alarmHour.setMinutes(10, 0)

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
}
