import React, {useState, useEffect} from 'react';

import {Layout, Select} from '@ui-kitten/components';

import styles from './styles';

export const DropDownMenu = ({
  name,
  options,
  width = 150,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <Layout>
      <Select
        data={options}
        placeholder={name}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
        controlStyle={[styles.container, {width: width}]}
        width={width}
      />
    </Layout>
  );
};
