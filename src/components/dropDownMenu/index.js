import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Select} from '@ui-kitten/components';

import styles from './styles';

const data = [{text: 'Option 1'}, {text: 'Option 2'}, {text: 'Option 3'}];

export const DropDownMenu = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  return (
    <Layout style={styles.container}>
      <Select
        data={data}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
    </Layout>
  );
};
