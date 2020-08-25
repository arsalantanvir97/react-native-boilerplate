import React, {useState, useContext} from 'react';
import SignupView from './view';
import {validateFullName, validateEmail} from '../../../utils';

const Signup: () => React$Node = (props) => {
  const [email, setEmail] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState({error: false, message: ''});
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: '',
  });
  const [firstNameError, setFirstNameError] = useState({
    error: false,
    message: '',
  });
  const [lastNameError, setLastNameError] = useState({
    error: false,
    message: '',
  });

  const onChange = (data) => {
    const {text, name} = data;
    if (name.toLowerCase() === 'email') {
      setEmail(text);
    } else if (name.toLowerCase() === 'password') {
      setPassword(text);
    } else if (name.toLowerCase() === 'first name'){
      setfirstName(text);
    }else {
      setlastName(text)
    }
  };

  const onBlur = (name) => {
    if (name.toLowerCase() === 'email') {
      const res = validateEmail(email);
      if (!res) {
        setEmailError({error: true, message: 'Please enter a valid email.'});
      } else {
        setEmailError({error: false, message: ''});
      }
    } else if (name.toLowerCase() === 'password') {
      if (password.length < 8) {
        setPasswordError({
          error: true,
          message: 'Password should have atleast 8 letters.',
        });
      } else {
        setPasswordError({error: false, message: ''});
      }
    } else if (name.toLowerCase() === 'first name') {
      if (!validateFullName(firstName)) {
        setFirstNameError({error: true, message: 'Please enter a valid first name.'});
      } else {
        setFirstNameError({error: false, message: ''});
      }
    } else {
      if (!validateFullName(lastName)) {
        setLastNameError({error: true, message: 'Please enter a valid last name.'});
      } else {
        setLastNameError({error: false, message: ''});
      }
    }
  };

  const onCheckToggle = () => {
    setChecked(!checked);
  };

  const navigateToSignin = () => {
    props.navigation.navigate('Signin');
  };

  const viewProps = {
    email,
    password,
    checked,
    loading,
    onChange,
    onCheckToggle,
    navigateToSignin,
    emailError,
    passwordError,
    onBlur,
    firstName,
    lastName,
    firstNameError,
    lastNameError,
  };

  return <SignupView {...viewProps} />;
};

export default Signup;
