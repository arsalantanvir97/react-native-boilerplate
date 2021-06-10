import React,{useState} from 'react';

import { ScrollView,InlineButton,StyleSheet, View, Text, Dimensions ,Image,SafeAreaView,TouchableOpacity,FlatList} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FEAIcon from 'react-native-vector-icons/Feather';
import ENTIcon from 'react-native-vector-icons/Entypo';



import { WebView } from 'react-native-webview';
import { ProgressBar, Colors } from 'react-native-paper';

import theme from '../../../../theme';
// import { ScrollView } from 'react-native-gesture-handler';
import { CustomDrawerButtonHeader } from '../../../components/Header';
const { height, width } = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;



const AboutView: () => React$Node = (props) => {
  const user={
    name:'Riley Gilbery',
    type:'Football,Runner',
    place:'Lagos,Nigeria',
    age:24,
    phone:'03002178654',
    connections:500,
    videourl:'https://www.youtube.com/watch?v=sFbw5I9gYPc',
    skills:[
      {
        name:'Dribbling',
        score:'500'
      },
      {
        name:'Shooting',
        score:'500'
      }, {
        name:'Passing',
        score:'500'
      }, {
        name:'Recieving',
        score:'500'
      }, {
        name:'Speed',
        score:'20'
      },
      {
        name:'Juggling',
        score:'500'
      },
    ],experience:[
      {
url:'../../../assets/images/burnley-logo-3.png',
postition:'Goalkeeper',
club:'Burnley Football Club'
},
{
  url:'../../../assets/images/west-ham-united-logo.png',
  postition:'Goalkeeper',
  club:'WestHam Football Club'

  },
    ]

  }

  return (
    <>
      <CustomDrawerButtonHeader title={'About'} />
      <ScrollView style={{backgroundColor:'white'}}>
      <View style={styles.backcol}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'flex-end',position:'absolute',top:'49%',left:'36%'}}>
  
      <Avatar.Image style={styles.avatarpropert} size={115} source={require('../../../assets/images/imagesss.png')} />
      <TouchableOpacity style={styles.iconboxx} onPress={() => props.navigation.navigate('editprofile')}>
      <FEAIcon onPress={() => props.navigation.navigate('editprofile')}
                name="edit-2"
                size={20}

                  resizeMode="contain"
                  style={{color:"#5F9D36"}}
                />
                </TouchableOpacity>
      </View>
      </View>
      <View style={{height:45,}}></View>
      <View style={{display:'flex',alignItems:'center'}}>
      <Text style={styles.username}>{user?.name.toUpperCase()}</Text>
      <Text style={styles.usertype}>{user?.type}</Text>
      <Text style={styles.place}>{user?.place}</Text>
      </View>
      <View style={{height:10}}></View>
      <View style={styles.infobox}>
        <View style={{display:'flex',flexDirection:'row',height:'100%'}}>
          <View style={{width:'33%',borderRightColor:'#ADD9AE', borderRightWidth:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:15,color:'#71BC40'}}>{user.age + '  '}</Text>
            <Text style={{fontSize:15}}>years old</Text>
            </View>

          </View>
          <View style={{width:'40%',borderRightColor:'#ADD9AE', borderRightWidth:1,justifyContent:'center',alignItems:'center'}}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>


            <Icon
                name="call-outline"
                size={25}

                  resizeMode="contain"
                  style={{ color: '#575454'}}
                />

            <Text style={{color:'#71BC40'}}>{'  ' +user.phone}</Text>
          </View>
          </View>

          <View style={{width:'27%',justifyContent:'center',alignItems:'center'}}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

          <Icon
                name="person-outline"
                size={25}

                  resizeMode="contain"
                  style={{ color: '#575454'}}
                />

            <Text style={{color:'#71BC40'}}>{'  ' +user.connections}</Text>
          </View>
          </View>

        </View>
      </View>
      <View style={{height:27}}></View>
<View style={styles.videobox}>
  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
  <Text style={styles.videoinfo}>VIDEO INTRODUCTION</Text>
  <TouchableOpacity style={styles.iconbox} onPress={() => props.navigation.navigate('editprofile')}>
      <FEAIcon
                name="edit-2"
                size={20}

                  resizeMode="contain"
                  style={{color:"#5F9D36"}}
                />
                </TouchableOpacity>
  </View>
  <View style={{
                      height: 180,
                      borderWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 2,
                      marginTop: 20,
                      borderColor: '#575454',
                      justifyContent: 'center',

                  }}>
  <WebView 
source={{ html: user.videourl.split('watch?v=')[1] === undefined ? `<html><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><iframe src="https://www.youtube.com/embed/${user.videourl.split('/')[user.videourl.split('/').length - 1]}?modestbranding=1&playsinline=1&showinfo=0&rel=0" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></html>` : `<html><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><iframe src="https://www.youtube.com/embed/${user.videourl.split('watch?v=')[1]}?modestbranding=1&playsinline=1&showinfo=0&rel=0" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></html>` }}
/>
</View>
</View>
<View style={{height:27}}></View>

  <View style={styles.videobox}>
  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
  <Text style={styles.videoinfo}>OVERVIEW</Text>
  <TouchableOpacity style={styles.iconbox} onPress={() => props.navigation.navigate('editprofile')}>
      <FEAIcon
                name="edit-2"
                size={20}

                  resizeMode="contain"
                  style={{color:"#5F9D36"}}
                />
                </TouchableOpacity>
  </View>
<Text style={styles.overviewinfo}>Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem Ipsum
has been the industry's standard dummy text
ever since the 1500s, when an unknown printer
took a galley of type and scrambled it to make a
type specimen book. It has survived not only
five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged. It
was popularized in the 1960s with the release of
Letterset sheets containing Lorem Ipsum
passages, and more recently with desktop
publishing software like Aldus PageMaker
including versions of Lorem Ipsum.publishing</Text>
</View>
<View style={{height:27}}></View>
<View style={styles.videoboxes}>
<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.videoinfos}>Sports & Skills</Text>
  <TouchableOpacity style={styles.iconbox} onPress={() => props.navigation.navigate('editprofile')}>
      <ENTIcon
                name="plus"
                size={20}

                  resizeMode="contain"
                  style={{color:"#5F9D36"}}
                />
                </TouchableOpacity>
  </View>
  <View style={styles.footballbox}>
  <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
  <Text style={{color:'#79AB42',fontSize:22,marginRight:20}}>Football</Text>
  <TouchableOpacity style={styles.iconbox} onPress={() => props.navigation.navigate('editprofile')}>
      <FEAIcon
                name="edit-2"
                size={20}

                  resizeMode="contain"
                  style={{color:"#5F9D36"}}
                />
                </TouchableOpacity>
  </View>
    <View style={{height:36}}></View>
    {user?.skills.map(skill=>(
      <>
      
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:4}}>
      <Text style={{color:'#79AB42',fontSize:17}}>{skill.name}</Text>
      <Text >{skill.score}</Text>

      {/* <Icons
                name="award"
                size={25}

                  resizeMode="contain"
                  style={{ color: '#575454'}}
                /> */}
      </View>
      <ProgressBar style={{height:10,borderRadius:7}} progress={0.5} color={'#79AB42'} />
<View style={{height:15}}></View>
</>
    ))}
  </View>
</View>
<View style={{height:27}}></View>
<View style={styles.videobox}>
<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.videoinfo}>EXPERIENCE</Text>
  <TouchableOpacity style={styles.iconbox} onPress={() => props.navigation.navigate('editprofile')}>
      <FEAIcon 
                name="edit-2"
                size={20}

                  resizeMode="contain"
                  style={{color:"#5F9D36"}}
                />
                </TouchableOpacity>
  </View>


<View style={{height:36}}></View>

{user?.experience.map(exp=>(
      <>

      <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
      <Avatar.Image size={80} source={require('../../../assets/images/burnley-logo-3.png')} style={{marginRight:35}}/>
      <View style={{display:'flex',flexDirection:'column',}}>
      <Text style={{color:'#79AB42',fontSize:17}}>{exp.postition}</Text>
      <Text style={{marginTop:5}} >{exp.club}</Text>

      </View>
      
</View>
<View style={{height:24}}></View>
<View style={{ borderBottomColor: '#00000029',
    borderBottomWidth: 0.9,marginBottom:30}}></View>
</>
    ))}
    </View>

</ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  backcol:{
    height:145,
    backgroundColor:'rgb(227,241,216)'
  },
  avatarpropert:{
    // position: 'absolute',
    // top:'50%',
    // left:'36%',
    borderColor:'#75BC46',
    borderWidth:1,

    marginRight:35
    // transform: 'translate(-50%, -50%)',
  },
  username:{fontFamily: theme.font.bold,
  fontSize: 18,
  marginTop:1,
  color:'#322E2E'

  },
  videobox:{
    marginHorizontal:15,padding:30,
    borderColor:'#000',
    borderWidth:0.06,
    borderRadius:11
  },
  videoboxes:{
    marginHorizontal:15,padding:30,
    borderColor:'#000',
    borderWidth:0.06,
    borderRadius:11
  },
  iconbox:{
    
height:33,
width:33,
borderWidth:0.3,
borderColor:'#000',
borderRadius:40,
display:'flex',
alignItems:'center',
justifyContent:'center',
// marginRight:10
  },
  iconboxx:{
    height:33,
    width:33,
    borderWidth:0.3,
    borderColor:'#000',
    borderRadius:40,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    // marginRight:10
    zIndex:10000000
  },

  footballbox:{
    marginHorizontal:15,padding:30,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.11,
    // shadowRadius: 0.30,
    
    // elevation: 0.3,
    borderColor:'#000',
    borderWidth:0.2,
    borderRadius:11
  },
  videoinfo:{fontFamily: theme.font.bold,
    fontSize: 18,
    marginTop:1,
    color:'#3B3636'
  
    },
    videoinfos:{fontFamily: theme.font.bold,
      fontSize: 18,
      marginTop:1,
      color:'#3B3636',
      marginBottom:20
      },
  usertype:{fontWeight:'500',
  marginTop:1,
    fontSize: 17,
    color:'#635F5F'
    },
    overviewinfo:{fontWeight:'600',
      fontSize: 15,
      marginTop:15,
      color:'#3B3636'
    
      },
    
    place:{
      fontWeight:'100',
  marginTop:2,
    fontSize: 17,
    color:'#959292'

    },
    infobox:{
      backgroundColor:'#E2F1D8',
height:80,
marginHorizontal:20,
borderBottomRightRadius:30,
borderBottomLeftRadius:30

    }
  
});

export default AboutView;


