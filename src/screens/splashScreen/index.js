/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import { ActivityIndicator, View, Text, Image } from 'react-native';
import { BaseNavigator } from '../../navigation/BaseNavigator';
import { colors } from '../../styles';

export default class SplashScreen extends Component {

  constructor() {
    super();
    this.state = {
      animating: false,
      align: 'center',
      alignsecond: false,
      goRouter: false,
    };
    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignsecond: true,
          });
        }),
      3000
    );
    setTimeout(
        () =>
          this.setState({ align: 'flex-start' }, function() {
            this.setState({
              goRouter: true,
            });
          }),
        6000
      );

  }


  render() {

    if(this.state.goRouter){
      return <BaseNavigator/>
    }
    else {
        return(
            <View
            style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: this.state.align,
                //marginHorizontal: 40,
                backgroundColor: colors.primary,
            }}>
            <Image
                source={require('../../assets/img/icon_transparent.png')}
                style={{ width: 200, height: 200 }}
            />
            {!this.state.alignsecond ? null : (
                <View style={{/* margin: 10 */}}>
                <Text
                    style={{ color: '#303952', fontSize: 30, fontWeight: "700", marginTop: 40 }}>
                    {`Despertador\n de Remédio`}
                </Text>
                <ActivityIndicator size="large" color="#596275" />

                </View>
            )}
            </View>
        ); 
   }
  }
}