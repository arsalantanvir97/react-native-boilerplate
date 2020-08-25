import React from 'react';
import {
    NavigationContainer
  } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthFlow from '../AuthFlow';
import Snackbar from '../../components/Snackbar';
const Stack = createStackNavigator();


const Application = () => {
    return (
        <NavigationContainer>
            <AuthFlow />
            <Snackbar />
        </NavigationContainer>
    )
}

export default Application