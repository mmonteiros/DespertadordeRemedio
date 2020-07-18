/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import {ActivityIndicator, View, Text, Image } from 'react-native';
import RNRestart from 'react-native-restart'; // Import package from node modules

export default class LoadingPage extends Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      align: 'center',
      alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignsecond: true,
          });
        }),
      1000
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="#0000CD" />
        {
            !this.state.alignsecond ? null : RNRestart.Restart()  // Immediately reload the React Native Bundle
        }
      </View>
    );
  }
}