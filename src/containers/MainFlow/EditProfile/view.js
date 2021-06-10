import React,{useEffect, useState} from 'react';

import { ScrollView,InlineButton,StyleSheet, View, Text, Dimensions ,Image,SafeAreaView,TouchableOpacity,FlatList} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FEAIcon from 'react-native-vector-icons/Feather';
import { ProgressBar, Colors } from 'react-native-paper';
import { Provider, TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";


import { WebView } from 'react-native-webview';

import theme from '../../../../theme';
// import { Dropdown } from 'react-native-material-dropdown';

// import { ScrollView } from 'react-native-gesture-handler';
import { CustomDrawerButtonHeader } from '../../../components/Header';
const { height, width } = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;



const EditProfileView: () => React$Node = (props) => {
    const [showform1,setShowform1]=useState(true)
    const [showDropDown, setShowDropDown] = useState(false);

    const [gender, setGender] = useState();
  
    const genderList = [
      { label: "Male", value: "male" },
  
      { label: "Female", value: "female" },
  
      { label: "Others", value: "others" },
    ];
  
    const [showDropDown2, setShowDropDown2] = useState(false);


    const [gender2, setGender2] = useState();
  
    const genderList2 = [
      { label: "Male", value: "male" },
  
      { label: "Female", value: "female" },
  
      { label: "Others", value: "others" },
    ];

    const [showDropDown3, setShowDropDown3] = useState(false);


    const [gender3, setGender3] = useState(24);
  
    const genderList3 = [
      { label: "child", value: 1 },
  
      { label: "boy", value: 11 },
  
      { label: "men", value: 21 },
    ];

    const [showDropDown4, setShowDropDown4] = useState(false);


    const [gender4, setGender4] = useState(24);
  
    const genderList4 = [
      { label: "child", value: 1 },
  
      { label: "boy", value: 11 },
  
      { label: "men", value: 21 },
    ];

    const [showDropDown5, setShowDropDown5] = useState(false);


    const [gender5, setGender5] = useState(24);
  
    const genderList5 = [
      { label: "child", value: 1 },
  
      { label: "boy", value: 11 },
  
      { label: "men", value: 21 },
    ];
  
    const [text, setText] = useState('');
    const [text2, setText2] = useState('+92 382 2660012');

useEffect(()=>{
console.log("showform1",showform1)
},[showform1])
  return (
    <>
      <CustomDrawerButtonHeader title={'editprofile'} />
      <ScrollView style={{backgroundColor:'white'}}>
          {showform1?(
    <View style={styles.conatiner}>
        <View style={styles.basicinfobox}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                <View style={styles.iconbox} >
      <FEAIcon
                name="file-text"
                size={35}

                  resizeMode="contain"
                  style={{color:"#5F9D36"}}
                />
                </View>
  <View style={{display:'flex',flexDirection:'column'}}>
      <View style={{display:'flex',flexDirection:'row'}}>
<Text style={{color:'#fff',fontSize:17}}>Step 1</Text>
<Text style={{color:'#4E6E2C',fontSize:17}}> /2</Text>
</View>
<Text style={{color:'#fff',fontSize:19,fontWeight:'bold'}}>BASIC INFORMATION</Text>

  </View>
  </View>
  <View style={{height:19}}></View>
  <ProgressBar style={{height:6,borderRadius:7,width:'90%'}} progress={0.2} color={'#fff'} />

  </View>
  <View style={{paddingVertical:20}}>
      <View style={{display:'flex',flexDirection:'row'}}>
  <Avatar.Image style={styles.avatarpropert} size={115} source={require('../../../assets/images/imagesss.png')} />
  <View style={{display:'flex',flexDirection:'column'}}>
<Text style={{color:'#000',fontWeight:'bold'}}>Upload your profile picture</Text>
<Text style={{color:'#000',fontWeight:'normal',fontSize:13}}>Accepted file PNG, JPG, JPEG</Text>
<View style={{height:15}}></View>
<Text style={{color:'#70BC40'}}>Upload Image</Text>
  </View>
  
  </View>
  </View>
  
  <DropDown
          label={"Kicking Foot"}
          mode={"outlined"}
          value={gender}
          setValue={setGender}
          list={genderList}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          dropDownContainerMaxHeight={300}
        //   inputProps={{
        //     right: <TextInput.Icon name={"menu-down"} />,
        //   }}
        />
        <View style={{height:15}}></View>
        <View style={{display:'flex',flexDirection:'row',}}>
        <TextInput
        style={{backgroundColor:'#fff',flex:1,marginRight:14}}
      label="Height"
      value={text}
      onChangeText={text => setText(text)}
mode='outlined'
underlineColor='grey'
theme={{ colors: { primary: 'grey',underlineColor:'transparent',}}}/>
<View style={{width:110,borderRadius:30}}>
    <DropDown
          label={"Gender"}
          mode={"outlined"}
          value={gender2}
          setValue={setGender2}
          list={genderList2}
          visible={showDropDown2}
          showDropDown={() => setShowDropDown2(true)}
          onDismiss={() => setShowDropDown2(false)}
          dropDownContainerMaxHeight={150}
        //   inputProps={{
        //     right: <TextInput.Icon name={"menu-down"} />,
        //   }}
        />
        </View>
       

</View>
<View style={{height:15}}></View>
<DropDown
          label={"Age"}
          mode={"outlined"}
          value={gender3}
          setValue={setGender3}
          list={genderList3}
          visible={showDropDown3}
          showDropDown={() => setShowDropDown3(true)}
          onDismiss={() => setShowDropDown3(false)}
          dropDownContainerMaxHeight={150}
        //   inputProps={{
        //     right: <TextInput.Icon name={"menu-down"} />,
        //   }}
        />
  <View style={{height:15}}></View>
  <TextInput
        style={{backgroundColor:'#fff',flex:1}}
      label="Phone No"
      value={text2}
      onChangeText={text => setText2(text)}
mode='outlined'
underlineColor='grey'
theme={{ colors: { primary: 'grey',underlineColor:'transparent',}}}/>
<View style={{height:15}}></View>
<DropDown
          label={"Country"}
          mode={"outlined"}
          value={gender4}
          setValue={setGender4}
          list={genderList4}
          visible={showDropDown4}
          showDropDown={() => setShowDropDown4(true)}
          onDismiss={() => setShowDropDown4(false)}
          dropDownContainerMaxHeight={150}
        //   inputProps={{
        //     right: <TextInput.Icon name={"menu-down"} />,
        //   }}
        />
        <View style={{height:15}}></View>
        <DropDown
          label={"State/Province"}
          mode={"outlined"}
          value={gender5}
          setValue={setGender5}
          list={genderList5}
          visible={showDropDown5}
          showDropDown={() => setShowDropDown5(true)}
          onDismiss={() => setShowDropDown5(false)}
          dropDownContainerMaxHeight={150}
        //   inputProps={{
        //     right: <TextInput.Icon name={"menu-down"} />,
        //   }}
        />
  <View style={{height:35}}></View>
  <TouchableOpacity onPress={()=>setShowform1((showform) => !showform)} style={{display:'flex',alignItems:'center',justifyContent:'center',height:50,backgroundColor:'#8AB748',borderRadius:25,marginBottom:20}}>
<Text style={{fontSize:19,color:'#fff',textAlign:'center'}}>Next</Text>
  </TouchableOpacity>

  </View>
  ):(
    <TouchableOpacity onPress={()=>setShowform1((showform) => !showform)} style={{display:'flex',alignItems:'center',justifyContent:'center',height:50,backgroundColor:'#8AB748',borderRadius:25,marginBottom:20}}>
    <Text style={{fontSize:19,color:'#fff',textAlign:'center'}}>Next</Text>
      </TouchableOpacity>
  )}
</ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
    conatiner:{
        marginHorizontal:20
    },basicinfobox:{
height:130,
backgroundColor:'#88B548',
borderTopLeftRadius:10,
borderTopRightRadius:10,
paddingHorizontal:26,
paddingVertical:18
  },
    iconbox:{
    height:60,
    width:56,
    borderWidth:0.3,
    backgroundColor:'#fff',
    borderRadius:40,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginRight:20
},
avatarpropert:{
    // position: 'absolute',
    // top:'50%',
    // left:'36%',
    borderColor:'#75BC46',
    borderWidth:1,
    marginRight:20

}  ,
dropdownstyling:{
    flex: 1,


    justifyContent: "center",
    backgroundColor:'#fff'
}

});

export default EditProfileView;


