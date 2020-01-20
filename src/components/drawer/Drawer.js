/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages
 */

import React from 'react';
import { SafeAreaView } from 'react-navigation';
import {
  Drawer,
  DrawerHeaderFooter,
  Icon,
} from '@ui-kitten/components';

export const DrawerComponent = ({ navigation }) => {

  const onSelect = (index) => {
    const { [index]: selectedTabRoute } = navigation.state.routes;
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaView>
      <Drawer data={[{ title: 'Home' }, { title: 'Settings' }]} onSelect={onSelect} />
    </SafeAreaView>
  );
};