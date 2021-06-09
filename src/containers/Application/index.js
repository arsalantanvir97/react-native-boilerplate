import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthFlow from '../AuthFlow';
import InitialSetupFlow from '../InitialSetupFlow';
import MainFlow from '../MainFlow';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { getStorageItem } from '../../utils';
import { onInitialDone } from '../../store/actions/layoutActions';
import { AsyncStorage } from 'react-native';

const Stack = createStackNavigator();

const Application = (props) => {
  useEffect(() => {
    (async () => {
      const initial = await getStorageItem("Initial")
      console.log('initial -->', initial)
      initial ? props.setInitial() : null;
      SplashScreen.hide();
      await AsyncStorage.clear();
      const cxccc = await getStorageItem("Initial")
      console.log("after", cxccc)
    })()
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="AuthFlow">
        {props.user ? (
          <Stack.Screen name="AuthFlow" component={AuthFlow} />
        ) : (
            <>
              {/* <Stack.Screen name="InitialFlow" component={InitialSetupFlow} /> */}
              <Stack.Screen name="MainFlow" component={MainFlow} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    open: state.layoutReducer.snackbarState,
    message: state.layoutReducer.snackbarMessage,
    user: state.auth.user,
    initial: state.layoutReducer.initial
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInitial: () => dispatch(onInitialDone()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
