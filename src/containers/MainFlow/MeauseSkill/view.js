import React,{useEffect,useRef, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { ScrollView,InlineButton,StyleSheet, View, Text, Dimensions ,Image,SafeAreaView,TouchableOpacity,FlatList} from 'react-native';
import { Modal, Portal, Text as Texts, Button, Provider } from 'react-native-paper';

import theme from '../../../../theme';
// import { ScrollView } from 'react-native-gesture-handler';
import { CustomDrawerButtonHeader } from '../../../components/Header';
import FAIcon from 'react-native-vector-icons/Fontisto';
import { set } from 'react-native-reanimated';
import {RNCamera} from 'react-native-camera';


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

let urllls=''
const MeasureSkillView: () => React$Node = (props) => {
  useEffect(()=>{
    console.log('height',height)
    },[height])
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
    { id: '1', image: IMAGES.image8,name:'Free Kick',challenge:'Your Result',date:'20/21/2020',connections:40,avatar:require('../../../assets/images/imagesss.png') },
    { id: '2', image: IMAGES.image2,name:'Stepover',challenge:'beat that',date:'20/21/2020',connections:51,avatar:require('../../../assets/images/imagesss.png') },
    // { id: '3', image: IMAGES.image3,name:'abcde' },
    { id: '4', image: IMAGES.image4,name:'Juggling',challenge:'your result',date:'20/21/2020',connections:44,avatar:require('../../../assets/images/imagesss.png') },
    { id: '5', image: IMAGES.image5,name:'Shooting',challenge:'beat that',date:'20/21/2020',connections:22,avatar:require('../../../assets/images/imagesss.png') },
    { id: '6', image: IMAGES.image6,name:'Passing',challenge:'your result',date:'20/21/2020',connections:9,avatar:require('../../../assets/images/imagesss.png') },
    { id: '7', image: IMAGES.image7,name:'Heading' ,challenge:'beat that',date:'20/21/2020',connections:17,avatar:require('../../../assets/images/imagesss.png')}
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
// const camera = useRef(null);

// useEffect(()=>{
// console.log('camera',camera)
// },[camera])

const [visible, setVisible] = useState(true)
const [urls, setUrls] = useState('')

const [videotoggle, setVideotoggle] = useState(true)
const [emptytext,setEmptytext]=useState('')
const [pausetext, setPausetext] = useState('Tap Anywhere to Pause')
const [resumetext, setResumetext] = useState('Tap Anywhere to Resume')


const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);

const containerStyle = {};

useFocusEffect(
  React.useCallback(() => {
setVisible(true)
  }, [])
);
const [processing,setProcessing]=useState(false)
const [recording,setRecording]=useState(false)
const startRecording=async(camera,status)=> {
  console.log('status',status)
  console.log('helo')
  setVideotoggle(false)
setRecording(true)  // default to mp4 for android as codec is not set
if(urllls?.deviceOrientation){
  console.log('videoresumed')
  const options = { path:urllls.uri,base:64,maxDuration:60};
  try {
    const data = await camera.recordAsync(options);
    urllls=data
    console.log('uri1',urllls)
    
  } catch (error) {
    console.log('error',error)
  }


}
const data = await camera.recordAsync({base:64});
urllls=data
console.log('urllls',urllls,urllls?.deviceOrientation)
setUrls(data)
  console.log('uri2',data)
}

// const stopRecording =async () => {
//   const ab= await camera.stopRecording();
//   console.log('ab',ab)
// };
// let button = (
//   <TouchableOpacity
//     onPress={()=>startRecording(camera)}
//     style={styles.capture}>
//     {console.log('aaa')}
//     <Text style={{fontSize: 14}}> RECORD </Text>
//   </TouchableOpacity>
// );
// if (recording) {
//   button = (
//     <TouchableOpacity
//       onPress={stopRecording}
//       style={styles.capture}>
//       <Text style={{fontSize: 14}}> STOP </Text>
//     </TouchableOpacity>
//   );
// }
// if (processing) {
//   button = (
//     <View style={styles.capture}>
//       <ActivityIndicator animating size={18} />
//     </View>
//   );
// }
const recordingPause=async(camera,status)=>{
  console.log('status',status)
  console.log('pause')
setVideotoggle(true)
camera.stopRecording()

console.log('yu')

}
const resumeRecording=async(camera)=>{
  console.log('resume')
  setVideotoggle(1)
 const uu= await camera.resumePreview()
 console.log('uu',uu)

  }
const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);
useEffect(()=>{
console.log('videotoggle',videotoggle)
},[])
  return (
    <>
      <CustomDrawerButtonHeader title={'About'} />
      <View style={{flex:1,backgroundColor:'grey' }}>
      {/* <RNCamera
 ref={ref => {
  camera = ref;
}}          
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          {button}
        </View> */}
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() =>{
                  videotoggle?
                  startRecording(camera,status):
                  recordingPause(camera,status)
                  }} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}>{videotoggle==0 ? emptytext :videotoggle==1 ? pausetext : videotoggle==2 ?resumetext: null}  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      {/* <CustomSurface style={styles.cardContainer}> */}
        {/* <View> */}
        
          {/* <Text style={styles.headingstyle}>HELLO, OLIVIER GEORGE</Text> */}
          {/* <View style={{height:200}}></View> */}
          <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <View style={{marginHorizontal:20,height:'auto',maxHeight:546.742857143,width:370,padding:20,borderRadius:10,backgroundColor:'#fff',display:'flex',}}>
          <Texts style={{fontSize:16,fontWeight:'bold',color:'#78AB41'}}>MEASURE A SKILL</Texts>
          <View style={{height:23}}></View>
          <Texts style={{fontWeight:'bold',fontSize:15}}>Free Kick Instructions</Texts>
          <View style={{height:18}}></View>

          <Texts>Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's  standard  dummy text ever</Texts>
          <View style={{display:'flex',alignItems:'flex-end'}}>
          <Button style={{width:90,borderRadius:14,marginTop: 30,backgroundColor:'#7BAC42',color:'#fff'}} onPress={hideModal}>
      <Texts style={{color:'#fff'}}> Got it</Texts> 
      </Button></View>
          </View>
        </Modal>
      </Portal>
     
    </Provider>
    
      {/* </View> */}
          {/* <Text style={styles.welcomeHeading}>Welcome</Text> */}
          {/* <Text style={styles.paragraph}>
            we strongly recommend trading with a demo account or low risk trades
            at the beginning. Front Office is absolutely free for 14 days. A
            user is only charged after 14 days if they make a profit For more
            information see our Terms and Conditions.
          </Text> */}
        {/* </View> */}
        {/* <InlineButton onPress={() => { sliders?.length < 3 && _carousel.snapToNext()  }} label="Next" /> */}

        {/* <View style={styles.bottomActionWrapper}> */}
          {/* <Text style={styles.durationText}>{`${props.timerDay} DAYS ${props.timerHour}:${props.timerMinute}:${props.timerSecond.length !== 1 ? props.timerSecond : `0${props.timerSecond}`}`}</Text> */}
          {/* <Button label="Beat that" onPress={props.onNext} /> */}
        {/* </View> */}
      {/* </CustomSurface> */}
    </View>
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
  avatarproperties:{
    // position: 'absolute',
    // top:'15%',
    // left:'4%',
  color:'#fff'},
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
  },  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    // backgroundColor: '#E94258',
    height:130,
    borderRadius: 70,
    width:130,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },

});

export default MeasureSkillView;


