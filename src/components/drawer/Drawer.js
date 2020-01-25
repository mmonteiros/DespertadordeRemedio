import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions, SafeAreaView } from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, Image} from 'react-native';
import {
  Drawer,
  Icon,
  DrawerHeaderFooter
} from '@ui-kitten/components';


const PersonIcon = (style) => (
  <Icon {...style} name='person-outline'/>
);

const BellIcon = (style) => (
  <Icon {...style} name='bell-outline'/>
);

const EmailIcon = (style) => (
  <Icon {...style} name='email-outline'/>
);

const drawerData = [
  {
    title: 'Users',
    icon: PersonIcon,
  },
  {
    title: 'Orders',
    icon: BellIcon,
  },
  {
    title: 'Transactions',
    icon: EmailIcon,
  },
];

const Header = () => (
  <DrawerHeaderFooter
    title='John Doe'
    description='React Native Developer'
    style={styles.sectionHeadingStyle}
    icon={PersonIcon}
  />
);

const Footer = () => (
  <DrawerHeaderFooter 
    description='Drawer Footer'
    style={styles.footerContainer}
  />
);

export const SideMenu = () => {

  const onRouteSelect = (index) => {
    const route = drawerData[index];
    // navigate with React Navigation
    // this.props.navigation.navigate(route.title);
  };

  return (
    <SafeAreaView>
      <Drawer
        appearance={"noDivider"}
        data={drawerData}
        header={Header}
        footer={Footer}
        onSelect={onRouteSelect}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'white'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
});

export default SideMenu;