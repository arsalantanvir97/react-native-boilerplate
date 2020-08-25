/**
 * Sample React Native CustomButton
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';

const CustomInput = ({
  label,
  value,
  onChange,
  isSecure = false,
  error = false,
  onBlur,
  errorText,
}) => {
  return (
    <>
      <TextInput
        label={label}
        value={value}
        onChangeText={(text) => onChange({text, name: label})}
        style={styles.input}
        secureTextEntry={isSecure}
        error={error}
        onBlur={(e) => onBlur && onBlur(label)}
      />
      <HelperText type="error" visible >{errorText}</HelperText>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 287,
    backgroundColor: 'white',
    // marginBottom: 15,
    fontFamily: 'Nunito-Regular',
  },
});

export default CustomInput;
