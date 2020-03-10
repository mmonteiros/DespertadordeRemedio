import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Select} from '@ui-kitten/components';

import styles from './styles';

export const DropDownMenu = ({options, name}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Layout>
      <Select
        data={options}
        placeholder={name}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
        controlStyle={styles.container}
      />
    </Layout>
  );
};
