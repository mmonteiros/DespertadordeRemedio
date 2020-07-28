/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import { useEffect, useState } from 'react';
import { ApplicationProvider,Layout, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { default as appTheme } from './custom-theme.json'; // <-- Import app theme
import firebase from 'react-native-firebase';
import * as MagicMove from 'react-native-magic-move';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { BaseNavigator } from './src/navigation';

const theme = { ...lightTheme, ...appTheme };

firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) { 
      console.log('default app user ->', credential.user.toJSON());
    }
  });

export default class App extends React.Component {

    render(){
      return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <React.Fragment>
          <IconRegistry icons={EvaIconsPack}/>
          <MagicMove.Provider>
            <ApplicationProvider mapping={mapping} theme={theme}>
              <BaseNavigator/>
            </ApplicationProvider>
          </MagicMove.Provider>
        </React.Fragment>
        </Provider>
      );
    }
}
