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
import SplashScreen from './src/screens/splashScreen';



const theme = { ...lightTheme, ...appTheme };


const FailedToLogin = () => (
  <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack}/>
          <MagicMove.Provider>
            <ApplicationProvider mapping={mapping} theme={theme}>
              <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    
              </Layout>
            </ApplicationProvider>
          </MagicMove.Provider>
      </React.Fragment>
    </Provider>
);

const LoginSucess = () => (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack}/>
          <MagicMove.Provider>
            <ApplicationProvider mapping={mapping} theme={theme}>
              <SplashScreen/>
            </ApplicationProvider>
          </MagicMove.Provider>
      </React.Fragment>
    </Provider>
);

firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) { 
      console.log('default app user ->', credential.user.toJSON());
    }
  });

function App() {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      firebase.auth().onAuthStateChanged(userState => {
        setUser(userState);
  
        if (loading) {
          setLoading(false);
        }
      });
    }, []);
  
  
  
  if (!user) {
    return FailedToLogin();
  }
  
  return LoginSucess();
}

export default App;
