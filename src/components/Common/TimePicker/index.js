import React, {useState, useEffect} from 'react';

import {View, Platform} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
 // Upgrade moment to date-fns
//import format from 'date-fns'

import styles from './styles';
import {Value} from 'react-native-reanimated';

import FirebaseService from '../../../services/FirebaseService';

export const Time = (value, onSelect) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [showText, setShowText] = useState(true);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setShowText(false);
   
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  useEffect(() => {
    FirebaseService.updateInitialHour(moment(date).format('HH:mm'));
  });

  return (
    <View>
      <View>
        <Button
          onPress={showTimepicker}
          style={styles.container}
          textStyle={styles.text}>
          {showText && 'Insira a Hora'}
          {!showText && moment(date).format('HH:mm')}
        </Button>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
