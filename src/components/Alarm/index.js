import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import pushNotifications from '../PushNotification';
import { format, addHours, isBefore } from 'date-fns'
import AlarmItem from './AlarmItem';

export default function Alarm (props) {
    const now = new Date();
    const hoursAlarms = [];
    // Update data in flatlist
    const DATA = [];

    let nextAlarmHour;

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
        
        hoursAlarms[0] = initialHour;

        /* Case the frequency is equal to 24, don't need a repetition structure */
        if (frequency === 24) {
            
            hoursAlarms[1] = addHours(initialHour, frequency)
            DATA[0] = initialHour;
            DATA[1] = hoursAlarms[1];
            
            if (isBefore(now, initialHour)) {
                return hoursAlarms[0];
            } else {
                return hoursAlarms[1];
            }
        }

        /* 
            ** Calculates the time of the alarms **
            24 hours (one day) / frequency = number of alarms in the day. 
        */ 
        for (let index = 1; index <= 24/frequency; index++) {
            hoursAlarms[index] = addHours(hoursAlarms[index - 1], frequency);
            DATA[index -1] = hoursAlarms[index -1];
        }
        
        /* Check next alarm */
        for (let index = 0; index <= 24/frequency; index++) {
            if (isBefore(now, hoursAlarms[index])) {
                return hoursAlarms[index];
            }
        }
    }

    /* Set alarm with push notification */
    const setAlarm = () => {
        const initialHour = setDate();
        nextAlarmHour = nextHour(initialHour);

        console.log("Next Alarm Hour - " + nextAlarmHour)

        localyNotification.alarmNotification(
            props.name,
            props.instructions,
            frequency,
            nextAlarmHour,
            {}
        )

    }

    const renderItem = ({ item, index }) => {
        return (
            <AlarmItem
                dataHours={item}
                nextAlarmHour={nextAlarmHour}
            />
        )
    }

    // Separator style for rendering the items
    const renderSeparator = () => {
        return (
            <View 
                style={{
                    margin: 10
                }}
            />
        )
    }

    return (        
        <FlatList 
            data={DATA}
            renderItem={ renderItem }
            ItemSeparatorComponent={renderSeparator}
            keyExtractor={index => String(index)}

            contentContainerStyle={{justifyContent: "center", flexGrow: 1}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    );
}
