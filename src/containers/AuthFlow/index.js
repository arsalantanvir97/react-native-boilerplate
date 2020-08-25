import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import Signin from "./Signin"
import Signup from "./Signup"
import ForgetPassword from "./ForgetPassword"
import IntroSlider from './IntroSlider';
import AdvertisementIG from './AdvertisementIG';
import AdvertisementOanda from './AdvertisementOanda';
const Stack = createStackNavigator();


const AuthFlow = () => {
    return (
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="IntroSlider" component={IntroSlider} />
            <Stack.Screen name="AdvertisementIG" component={AdvertisementIG} />
            <Stack.Screen name="AdvertisementOanda" component={AdvertisementOanda} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </Stack.Navigator>
    )
}

export default AuthFlow