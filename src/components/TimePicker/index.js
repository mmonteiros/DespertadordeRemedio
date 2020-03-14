import React, {useState} from 'react';

import {View, Platform} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';
import {Value} from 'react-native-reanimated';

export const Time = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View>
        <Button
          onPress={showTimepicker}
          style={styles.container}
          textStyle={styles.text}>
          {'Insira a Hora'}
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
