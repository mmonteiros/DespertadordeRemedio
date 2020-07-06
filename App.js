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
import { ApplicationProvider,Layout, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { default as appTheme } from './custom-theme.json'; // <-- Import app theme
import { BaseNavigator } from './src/navigation';
import firebase from 'react-native-firebase';
import * as MagicMove from 'react-native-magic-move';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';


const theme = { ...lightTheme, ...appTheme };


const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

  </Layout>
);

firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) { 
      console.log('default app user ->', credential.user.toJSON());
    }
  });

const App = () => (
  <Provider store={createStore(reducers)}>
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

export default App;