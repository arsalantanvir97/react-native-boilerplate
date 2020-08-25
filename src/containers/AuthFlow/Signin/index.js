import React, {useState, useContext} from 'react';
import SigninView from './view';
import {validateEmail} from '../../../utils';

const Signin: () => React$Node = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState({error: false, message: ''});
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: '',
  });

  const onChange = (data) => {
    const {text, name} = data;
    if (name.toLowerCase() === 'email') {
      setEmail(text);
    } else if (name.toLowerCase() === 'password') {
      setPassword(text);
    }
  };

  const onBlur = (name) => {
    console.log('name in blur')
    if (name.toLowerCase() === 'email') {
      const res = validateEmail(email);
      if (!res) {
        setEmailError({error: true, message: 'Please enter a valid email.'});
      } else {
        setEmailError({error: false, message: ''});
      }
    }
    if (name.toLowerCase() === 'password') {
      if (password.length < 8) {
        setPasswordError({
          error: true,
          message: 'Password should have atleast 8 letters.',
        });
      } else {
        setPasswordError({error: false, message: ''});
      }
    }
  };

  const onCheckToggle = () => {
    setChecked(!checked);
  };

  const navigateToSignup = () => {
    props.navigation.navigate('Signup');
  };

  const onForgetPress = () => {
    props.navigation.navigate('ForgetPassword');
  };

  const viewProps = {
    email,
    password,
    checked,
    loading,
    onChange,
    onCheckToggle,
    navigateToSignup,
    onForgetPress,
    onBlur,
    emailError,
    passwordError,
  };

  return <SigninView {...viewProps} />;
};

export default Signin;
