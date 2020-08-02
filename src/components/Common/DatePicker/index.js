/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages
 */

import React, {useState} from 'react';
import {Icon, Layout} from '@ui-kitten/components';
import DatePicker from 'react-native-datepicker';
import {colors} from '../../../styles';

import styles from './styles';

const CalendarIcon = style => <Icon {...style} name="calendar" />;

export const DatepickerIcon = ({onSelect, date}) => {
  return (
    <Layout>
      <DatePicker
        placeholder="MM/AAAA"
        format="DD/MM/YYYY"
        mode="date"
        date={date}
        onDateChange={onSelect}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        iconSource={{uri: "../../../assets/img/calendar.png" }}
        customStyles={{
          dateTouchBody: {
          backgroundColor: colors.grayBackground,
          borderColor: colors.white,
          borderRadius: 30,
          height: 55,
          width: 150,
          marginLeft: -10,
          //minHeight: 376,
        },
        dateInput: {
          borderWidth: 0,
        },
        }}
      />
    </Layout>
  );
};
