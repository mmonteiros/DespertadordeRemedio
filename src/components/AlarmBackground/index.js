import React, { Component, useState, useEffect } from 'react';
import pushNotifications from '../PushNotification';
import { format, addMinutes, isBefore } from 'date-fns'
import BackgroundTimer from 'react-native-background-timer';
import { Alert } from 'react-native';


export default function Alarm (props) {
    const [time, setTime] = useState(format (new Date(), "HH:mm"));
    const localyNotification = new pushNotifications();

    useEffect(() => {
        updateTime();
    })

    const updateTime = () => {
        BackgroundTimer.runBackgroundTimer(() => {
            setTime(format (new Date(), "HH:mm"));
            console.log(time);
        }, 1000);

        if (time === "03:30") {
            localyNotification.showNotification(
                "AAA",
                "AAA",
                {},
                {}
            )
        }

        console.log(props.name)

    }

    

    return null;
}

// class Alarm extends Component {
//     constructor(props) {
//         super(props)
//         this.localyNotification = new pushNotifications();
//         this.localyNotification.configure();
//         this.initialHour = new Date();
//         this.alarmClock();
//         //this.state = { time: (format (new Date(), "HH:mm")) };
//     }

//     // componentDidMount() {
//     //     const { id, name, frequency, initialHour } = this.props.medicine.item;
//     //     const frequencyInt = parseInt(frequency, 10);
        
//     //     console.log("FrequencyInt: " + frequencyInt)

//     //     this.timerID = setInterval(
//     //       () => {
//     //           this.tick(),
//     //           this.alarmClock(frequencyInt)
//     //         },
//     //       10000
//     //     );
//     //   }
    
//     // componentWillUnmount() {
//     //     clearInterval(this.timerID);
//     // }

//     // tick() {
//     //     this.setState({
//     //         time: (format(new Date(), "HH:mm"))
//     //     });
//     // }

//     addHourFrequency = (frequency) => {
//        return addMinutes(this.initialHour, frequency);
//     }

//     nextHour = (dateInicial) => {
//         /*
//         if (dateAtual isBefeore dateInicial) {
//             return dataInicial
//         } else {
//             return nexHour(addMinutes(this.initialHour, this.frequency))
//         }
//         */
//     }

//     alarmClock = () => {
//         //const { id, name, frequency } = this.props.medicine.item;
//         const frequencyInt = parseInt(this.props.frequency, 10);

//         // Add next hour alarm
//         //this.initialHour = this.addHourFrequency( frequencyInt);

//         this.localyNotification.alarmNotification(
//             this.props.name,
//             frequencyInt,
//             this.initialHour,
//             {}
//         )


//         // if (this.state.time === format (this.initialHour, "HH:mm")) {
//         //     console.log("ALARMEEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeEEEE!!")

//         //     // Add next hour alarm
//         //     this.initialHour = this.addHourFrequency(frequency);
            
//         //     // Show Push Notifications with alarm clock properties
//         //     this.localyNotification.alarmNotification(
//         //         this.props.medicine.item.name,
//         //         {}
//         //     )    
//         // }
//     }

//     render() {
//         return null
//     }
// }

// export default Alarm;