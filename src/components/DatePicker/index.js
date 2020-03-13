/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages
 */

import React from 'react';
import {Datepicker, Icon, Layout} from '@ui-kitten/components';

import styles from './styles';

const CalendarIcon = style => <Icon {...style} name="calendar" />;

export const DatepickerIcon = ({DataMed}) => {
  const [date, setDate] = React.useState(null);

  return (
    <Layout>
      <Datepicker
        placeholder="MM/AAAA"
        controlStyle={styles.container}
        date={date}
        onSelect={setDate}
        icon={CalendarIcon}
      />
    </Layout>
  );
};
