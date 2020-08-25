/**
 * @format
 */
import React, { useEffect } from 'react'
import { AppRegistry } from 'react-native';
import App from './src/containers/Application';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/store/reducers/rootReducer';
import { color } from './theme';
import SplashScreen from 'react-native-splash-screen';
console.disableYellowBox = true;

const store = createStore(rootReducer, applyMiddleware(thunk));


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: color.primary,
  },
};

const Main = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
