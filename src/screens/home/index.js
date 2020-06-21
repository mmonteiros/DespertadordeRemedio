import React from 'react';
import {SafeAreaView, ScrollView} from 'react-navigation';
import {
  Icon,
  Button,
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

import {TopNavigationWithMenuShowcase} from '../../components/Header/Header';
import MedicinesList from '../../components/MedicinesList';
import {Routes, BaseNavigator} from '../../navigation';
import * as MagicMove from 'react-native-magic-move';

import styles from './styles';

const MenuIcon = (style) => <Icon {...style} name="menu-outline" />;

const SearchIcon = (style) => <Icon {...style} name="search-outline" />;

class HomeScreen extends React.Component {
  render() {
    const navigateCalendar = () => {
      navigation.openDrawer();
    };

    const renderSearchAction = () => <TopNavigationAction icon={SearchIcon} />;

    const renderMenuAction = () => (
      <TopNavigationAction icon={MenuIcon} onPress={navigateCalendar} />
    );

    const {navigation} = this.props;

    return (
      <SafeAreaView style={{flex: 1}}>
        <Layout style={styles.safeArea}>
          <TopNavigation
            title="Despertador de Remédio"
            alignment="center"
            backgroundColor="white"
            /*leftControl={renderMenuAction()}
            rightControls={renderSearchAction()}*/
          />
        </Layout>
        <Divider />
        <Layout style={styles.container}>
          <ScrollView>
            <MedicinesList/>
          </ScrollView>
        </Layout>
      </SafeAreaView>
    );
  }
}

export {HomeScreen};
