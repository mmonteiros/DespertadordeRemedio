import React from 'react';
import { SafeAreaView } from 'react-navigation';
import {
  Icon,
  Button,
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

import MedList from '../../components/MedList';
import { MenuIcon, SearchIcon } from '../../components/Common/Icons';
import styles from './styles';


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
          <MedList/>
        </Layout>
      </SafeAreaView>
    );
  }
}

export {HomeScreen};
