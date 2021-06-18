import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Icon as Icons} from 'react-native-vector-icons/FontAwesome';

import MatIcon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../../theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {logout, toggleAuthActionCreator} from '../../store/actions/authActions';
import {onSnackbar} from '../../store/actions/layoutActions';
import {useNavigation} from '@react-navigation/core';

const DrawerContent = (props) => {
  const navigation = useNavigation();
  console.log('user -->', props.user);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <TouchableOpacity onPress={()=>navigation.navigate('about')}>
            <Avatar.Image
              style={styles.avatar}
              size={48}
              source={require('../../assets/images/imagesss.png')}
            /></TouchableOpacity>
            <Text style={styles.username}>
              {/* {props.user && props.user.first_name}{' '}
              {props.user && props.user.last_name} */}
              Oliver George
            </Text>
            <Text style={styles.emailtext}>OliverGeorge14@gmail.com</Text>
          </View>
          <Drawer.Section>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                name="home"
                size={25}
                  resizeMode="contain"
                  style={{width: size, color: '#A8CC54'}}
                />

              )}
              label="Home"
              onPress={() => props.navigation.navigate('feedback')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                name="person-circle"
                size={25}

                  resizeMode="contain"
                  style={{width: size, color: '#A8CC54'}}
                />
              )}
              label="Profile"
              onPress={() => props.navigation.navigate('about')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                name="notifications"
                size={25}

                  resizeMode="contain"
                  style={{width: size, color: '#A8CC54'}}
                />
              )}
              label="Policy"
              onPress={() => props.navigation.navigate('policy')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                name="mail"
                size={25}

                  resizeMode="contain"
                  style={{width: size, color: '#A8CC54'}}
                />
              )}
              label="Policy"
              onPress={() => props.navigation.navigate('policy')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                name="settings-sharp"
                size={25}

                  resizeMode="contain"
                  style={{width: size, color: '#A8CC54'}}
                />
              )}
              label="Policy"
              onPress={() => props.navigation.navigate('policy')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                name="alert-circle"
                size={25}

                  resizeMode="contain"
                  style={{width: size, color: '#A8CC54'}}
                />
              )}
              label="Policy"
              onPress={() => props.navigation.navigate('policy')}
            />
            <DrawerItem l

              icon={({color, size}) => (
                <Icon
                name="log-out"
                size={25}

                  resizeMode="contain"
                  style={{width: size, color: '#A8CC54'}}
                />
              )}
              label="Logout"
              onPress={() =>
                logout(() => {
                  props.showAlert('Logging out');
                  console.log('nav -->', props.navigation);
                  props.toggleAuth('');
                  navigation.navigate('AuthFlow', {screen: 'Signin'});
                  // props.logout();
                })
              }
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {/* <Drawer.Section style={styles.bottomDrawerSection}>
        <TouchableOpacity style={styles.socialItem}>
          <Icon name="logo-facebook" size={26} color={theme.color.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialItem}>
          <Icon name="logo-linkedin" size={26} color={theme.color.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialItem}>
          <Icon name="logo-twitter" size={26} color={theme.color.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialItem}>
          <Icon name="logo-instagram" size={26} color={theme.color.primary} />
        </TouchableOpacity>
      </Drawer.Section> */}
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log('auth -->', state.auth);
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAuth: (data) => dispatch(toggleAuthActionCreator(data)),
    showAlert: (message) => dispatch(onSnackbar(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);

const styles = StyleSheet.create({
  drawerContent: {
    // padding: 20
  },
  emailtext:{
fontWeight:'100',
color:'#989898',
marginTop:2
  },
  userInfoSection: {
    paddingVertical: 30,
    // alignItems: 'center',
    marginLeft:21,
    borderBottomColor: '#00000029',
    borderBottomWidth: 1,
    marginBottom:25
  },
  avatar: {
    // backgroundColor: '#fff',
    marginBottom: 10,
    borderColor:'#78B733',
    borderWidth:1,
  },
  username: {
    fontFamily: theme.font.bold,
    fontSize: 16,
  },
  bottomDrawerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  socialItem: {
    marginHorizontal: 10,
  },
});
