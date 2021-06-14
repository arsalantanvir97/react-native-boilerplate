import React,{useEffect,useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { ScrollView,InlineButton,StyleSheet, View, Button,Text, Dimensions ,Image,SafeAreaView,TouchableOpacity,FlatList} from 'react-native';

import theme from '../../../../theme';
// import { ScrollView } from 'react-native-gesture-handler';
import { CustomDrawerButtonHeader } from '../../../components/Header';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import IONIcon from 'react-native-vector-icons/Ionicons';
import FONIcon from 'react-native-vector-icons/Fontisto';
import ANTIcon from 'react-native-vector-icons/AntDesign';



import VideoPlayer from 'react-native-video-controls'
import { ProgressBar, Colors } from 'react-native-paper';
import SendChallenge from '.';

const { height, width } = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;
const IMAGES = {
  image1: require('../../../assets/images/black1.jpg'),
  image2: require('../../../assets/images/Main-banner.jpg'),
  // image3: require('../../../assets/images/free kick.jpg'),
  image4: require('../../../assets/images/Beat-that.png'),
  image5: require('../../../assets/images/Beat-that.png'),
  image6: require('../../../assets/images/Beat-that.png'),
  image7: require('../../../assets/images/Beat-that.png'),
  image8: require('../../../assets/images/Main-banner.jpg'),

};


const ChallengeView: () => React$Node = (props) => {
  const [timerr,setTimerr]=useState(0)
  const [showthumbnail,setShowthumbnail]=useState(true)
  const [toggleboxnumber,setToggleboxnumber]=useState([])

  const [data1, setData1] = useState([
    
    { id: '1', image: IMAGES.image1,name:'Measure a skill',challenge:'Measure a skill',date:'20/21/2020',connections:40,avatar:require('../../../assets/images/black1.jpg') },
    { id: '2', image: IMAGES.image2,name:'Stepover',challenge:'beat that',date:'20/21/2020',connections:51,avatar:require('../../../assets/images/imagesss.png') },
    // { id: '3', image: IMAGES.image3,name:'abcde' },
    { id: '4', image: IMAGES.image4,name:'Juggling',challenge:'your result',date:'20/21/2020',connections:44,avatar:require('../../../assets/images/imagesss.png') },
    { id: '5', image: IMAGES.image5,name:'Shooting',challenge:'beat that',date:'20/21/2020',connections:22,avatar:require('../../../assets/images/imagesss.png') },
    { id: '6', image: IMAGES.image6,name:'Passing',challenge:'your result',date:'20/21/2020',connections:9,avatar:require('../../../assets/images/imagesss.png') },
    { id: '7', image: IMAGES.image7,name:'Heading' ,challenge:'beat that',date:'20/21/2020',connections:17,avatar:require('../../../assets/images/imagesss.png')}
  ]);
  const [data2, setData2] = useState([
    { id: '1', image: IMAGES.image8,name:'Free Kick',challenge:'Your Result',date:'20/21/2020',connections:40,avatar:require('../../../assets/images/xhaka.jpg'),player:'Granit Xhaka' },
    { id: '2', image: IMAGES.image2,name:'Stepover',challenge:'beat that',date:'20/21/2020',connections:51,avatar:require('../../../assets/images/xhaka.jpg'),player:'Paul Pogba' },
    // { id: '3', image: IMAGES.image3,name:'abcde' },
    { id: '4', image: IMAGES.image4,name:'Juggling',challenge:'your result',date:'20/21/2020',connections:44,avatar:require('../../../assets/images/messi.jpeg'),player:'Leo Messi' },
    { id: '5', image: IMAGES.image5,name:'Shooting',challenge:'beat that',date:'20/21/2020',connections:22,avatar:require('../../../assets/images/xhaka.jpg'),player:'Karim Benzema' },
    { id: '6', image: IMAGES.image6,name:'Passing',challenge:'your result',date:'20/21/2020',connections:9,avatar:require('../../../assets/images/messi.jpeg'),player:'Gareth Bale' },
    { id: '7', image: IMAGES.image7,name:'Heading' ,challenge:'beat that',date:'20/21/2020',connections:17,avatar:require('../../../assets/images/xhaka.jpg'),player:'Olivier Giroud'}
  ]);

  const datas={
    heading:'Lorem Ipsum is simply dummy text industry industry industry industry industry industry industry of the printing and typesetting industry ',
skills:[{
  name:'Measure a skill'},
  {
    name:'Stepover'},
    {
      name:'Juggling'},
      {
        name:'Shooting'},
        {
          name:'Passing'},
          {
            name:'Heading'},
]
  }
  const progress=[
    {
      name:'Stepover',skill:0.6},
      {
        name:'Juggling',skill:0.2},
        {
          name:'Shooting',skill:0.9},
          {
            name:'Passing',skill:0.3},
            {
              name:'Heading',skill:0.1},
  ]
const [togglebox, setTogglebox] = useState(false)
  let player
  useEffect(()=>{
console.log('player',player)
  },[player])
const onBuffer=()=>{
  console.log('helen')
} 
const videoError=()=>{
  console.log('errror')
}
const loadingHandler=()=>{
  setShowthumbnail(false)
  console.log('loading')
}
const endingHandler=()=>{
  console.log('errors')
}
useFocusEffect(
  React.useCallback(() => {
setToggleboxnumber([])  
},[])
);
 const setToggleboxes=(index)=>{
   if(!toggleboxnumber.includes(index)){
setTogglebox(!togglebox)
toggleboxnumber.push(index) 
console.log('jim')}
else{
setToggleboxnumber(toggleboxnumber.filter(xd=>(
  xd!==index
)))
  setTogglebox(!togglebox)

}
}
useEffect(()=>{
  console.log('player',toggleboxnumber)
    },[toggleboxnumber])
  return (
    <>
      <CustomDrawerButtonHeader title={'About'} />
      <ScrollView style={{ flex: 1,paddingHorizontal:25,backgroundColor:'#fff' }}>
        <View style={{height:20}}></View>
      <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center'}}>CHALLENGE</Text>
      <View style={{height:30}}></View>
<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Beat That! Recipients</Text>
    <FONIcon
                name="checkbox-active"
                size={30}

                  resizeMode="contain"
                  style={{color:'#78AB41'}}
                />
</View>
<FlatList
      style={{marginTop:20}}
    data={data2}
    renderItem={ ({ item, index }) => (
      <TouchableOpacity onPress={()=>setToggleboxes(index)} style={ toggleboxnumber.includes(index) ?styles.selectedbox:styles.unselectedbox}>
          <View style={styles.imgcont}>
<Image
        source={item.avatar}
        style={{height:'100%',width:'100%',borderRadius:40,}}
      />     
      </View>
      <Text style={toggleboxnumber.includes(index) ?styles.selectedcolor:styles.unselectedcolor}>{item.player}</Text>
      {toggleboxnumber.includes(index) ?
      <>
      <View style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'5%',}}>
          <View style={{height:30,width:27,backgroundColor:'#fff',borderRadius:25,display:'flex',justifyContent:'center',alignItems:'center'}}>
      <ANTIcon
                name="check"
                size={15}

                  resizeMode="contain"
                  style={styles.avatarproperties}
                /></View>
      </View>
      </>
      :null}
      </TouchableOpacity>

    )}
  />
  <View style={{height:40}}></View>
  <View style={{display:'flex',alignItems:'flex-end',}}>
  <View style={{height:40,width:40,}}>
    <IONIcon
                name="send"
                size={30}

                  resizeMode="contain"
                  style={styles.avatarpropertiesss}
                />
                </View></View>
    </ScrollView>
    
    </>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  // },
  cardContainer: {
    paddingTop: 10,
    paddingHorizontal: 20
  },
  heading: {
    fontFamily: theme.font.bold,
    fontSize: 16,
  },
  paragraph: {
    fontFamily: theme.font.regular,
    fontSize: 14,
    marginBottom: 30,
  },
  container: {
    // paddingLeft: config.deviceWidth * 0.1,
    //    width : config.deviceWidth * 1.2
    margin:12
  },
  // cardContainer: {
  //   flex: 0.8,
  //   width: vw * 90,
  //   marginLeft: vw * 5,
  //   justifyContent: 'space-between',
  //   paddingVertical: 20,
  //   alignItems: 'center',
  //   elevation: 4
  // },
  unselectedbox:{
    paddingHorizontal:24,display:'flex',flexDirection:'row',alignItems:'center',height:70,backgroundColor:'#F6F6F6',marginTop:20,borderRadius:14
  },
  selectedbox:{
    paddingHorizontal:24,display:'flex',flexDirection:'row',alignItems:'center',height:70,backgroundColor:'#79AB42',marginTop:20,borderRadius:14
  },
  
  imagewrapper:{
height:130,
marginHorizontal:21,
marginTop:15
  },headingstyle:{
    color:'green',fontSize:18,
    marginLeft:21,
    marginTop:20
  },
  img1property:{
height:"100%",
width:"100%",
borderRadius:8  },
  headingContain: {
    marginBottom: 30,
  },
  avatarpropertiesss:{
    // position: 'absolute',
    // top:'15%',
    // left:'4%',
  color:'#78AB41',
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,
zIndex:100000,
elevation: 24,
},
selectedcolor:{
    
  color:'#fff',
},
unselectedcolor:{
    
    color:'#000',
  },
  avatar2properties2:{
color:'#fff',
marginRight:10,
marginTop:5
// justifyContent:'flex-end'
  },
  img1heading:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16,
    maxWidth:350
    // position: 'absolute',
    // top:'15%',
    // left:'4%',
  },
  imagesheading:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16,
    maxWidth:105
  },
  imagesheading1:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16,
  },
  measureyourskillheading:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:12,
    backgroundColor:"#78AB41"
  },imgcont:{
height:40,
width:40,
borderRadius:24,
marginRight:14
  },
  dateheading:{
    color:'#AAA8A8',
    fontWeight:'normal',
    fontSize:13,
    marginTop:2
  },
  imageheadingplacing:{
position:'absolute',
bottom:'13%',
left:'14%'
  },measureyourskillstyling:{
    height:28,
    position:'absolute',
    bottom:'43%',
    left:'14%',
    borderRadius:6
  },
  welcomeHeading: {
    fontFamily: theme.font.bold,
    fontSize: 25,
    marginBottom: 30,
    textAlign: 'center',
  },
  paragraph: {
    fontFamily: theme.font.regular,
    marginHorizontal: 20,
    fontSize: 15,
  },
  durationText: {
    fontFamily: theme.font.bold,
    fontSize: 22,
    marginBottom: 10,
  }, carouselContainer: {
    marginTop: 50
  },
  slidesContiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide: {

    justifyContent: 'center',
    alignItems: 'center'
  },
  innerSlide: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideImage: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 40
  },
  slideTitle: {
    textTransform: 'uppercase',
    marginBottom: 20,
    color: "#F86300",
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  slideContent: {
    textAlign: 'center',
    color: "#303030",
    fontSize: 17
  },
  highlighted: {
    color: "#F86300",
  },
  action: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 20
  },backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height:'100%',
    width:'100%'
  },

});

export default ChallengeView;