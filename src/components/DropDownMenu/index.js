import React, {useState, useEffect} from 'react';

import {Layout, Select} from '@ui-kitten/components';

import styles from './styles';

export const DropDownMenu = ({name, options, type, selectedOption, setSelectedOption }) => {
  return (
    <Layout>
      <Select
        data={options}
        placeholder={name}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
        controlStyle={styles.container}
        type={type}
      />
    </Layout>
  );
};
