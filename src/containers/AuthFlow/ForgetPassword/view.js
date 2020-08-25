import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import AuthLayout from '../../../components/AuthLayout';
import Input from '../../../components/TextInput'
import Checkbox from '../../../components/Checkbox'
import { color,font } from '../../../../theme';

const ForgetView: () => React$Node = (props) => {
    const layoutProps = {
        heading: 'Please reset your password',
        buttonLabel: 'Reset',
        clickText: "Don't have an account?",
        onAuthToggle: props.navigateToSignup,
        onPress: props.onSignin,
        page: 'Forget',
        loading: props.loading
      }
  return (
    <>
      <AuthLayout {...layoutProps}>
        <Input label="Email" value={props.email} onChange={props.onChange} />
        {/* <Input label="Password" isSecure={true} value={props.password} onChange={props.onChange} /> */}
        {/* <View style={styles.actionWrapper}>
          <View style={styles.checkboxWrapper}>
            <Checkbox checked={props.checked} onPress={props.onCheckToggle} />
            <Text style={styles.checkboxText}>Remember me</Text>
          </View>
          <View>
            <Text style={styles.forgetText}>Forget Password?</Text>
          </View>
        </View> */}
      </AuthLayout>
    </>
  );
}


const styles = StyleSheet.create({
    actionWrapper: {
      flexDirection: 'row',
      marginTop: 22,
    },
    checkboxWrapper: {
      flexDirection: 'row',
    },
    checkboxText: {
      fontSize: 13,
      color: color.primary,
      fontFamily: font.regular,
      textAlignVertical: 'center',
    },
    forgetText: {
      fontSize: 13,
      color: color.primary,
      fontFamily: font.regular,
      marginTop: 8,
      width: 160,
      textAlign: 'right',
    },
  });
  

export default ForgetView