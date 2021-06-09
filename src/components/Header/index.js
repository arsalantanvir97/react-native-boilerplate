import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import theme from '../../../theme'
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-paper';

const CustomDrawerButtonHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.drawerTrigger} onPress={() => navigation.openDrawer()}>
        <Icon name="bars" size={26} color="#000000" />
      </TouchableOpacity>
      <Avatar.Image style={{marginRight:15,border: '4px solid #000000',  borderColor:'#78B733', borderWidth:1,}} size={24} source={require('../../assets/images/imagesss.png')} />

      {/* <Text style={styles.heading}>{props.title}</Text> */}
    </View>
  )
}

const CustomBackButtonHeader = (props) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.drawerTrigger} onPress={() => props.backFunction()}>
        <AntIcon
          name="arrowleft"
          size={30}
          color="#000000"
        />
      </TouchableOpacity>
      <Text style={styles.heading}>{props.title}</Text>
    </View>
  )
}

export { CustomDrawerButtonHeader, CustomBackButtonHeader }

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: theme.color.light,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  drawerTrigger: {
    // backgroundColor: 'green',
    height: 72,
    width: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontFamily: theme.font.bold,
    fontSize: 20,
    // marginLeft: 10,

  },
})
