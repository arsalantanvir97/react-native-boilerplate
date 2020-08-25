import React, {useState, useContext} from 'react';
import { View } from 'react-native';
import ForgetView from './view'

const ForgetPassword: () => React$Node = (props) => {


    const navigateToSignup = () => {
        props.navigation.navigate('Signup');
      };

    const viewProps = {
        navigateToSignup,
      };

    return (
        <ForgetView {...viewProps} />
    )
}

export default ForgetPassword