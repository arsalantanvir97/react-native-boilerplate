import React,{useEffect,useRef, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { ScrollView,InlineButton,StyleSheet, View, Text, Dimensions ,Image,SafeAreaView,TouchableOpacity,FlatList} from 'react-native';
import { Modal, Portal, Text as Texts, Button, Provider } from 'react-native-paper';

import theme from '../../../../theme';
// import { ScrollView } from 'react-native-gesture-handler';
import { CustomDrawerButtonHeader } from '../../../components/Header';
import ENTcon from 'react-native-vector-icons/Entypo';
import IONcon from 'react-native-vector-icons/Ionicons';

import MaterialICons from 'react-native-vector-icons/MaterialCommunityIcons';


import { set } from 'react-native-reanimated';
import {RNCamera} from 'react-native-camera';
import { useIsFocused } from '@react-navigation/native';
import Orientation from "react-native-orientation-locker";
import { RectButton } from 'react-native-gesture-handler';


const { height, width } = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;
const vvw=width / 2;
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
const MeasureSkillView = (props) => {
  const isFocused = useIsFocused();

  useEffect(()=>{
    console.log('height',height)
    },[height])

    useEffect(() => {
      props.navigation.addListener("focus", () => {
        Orientation.lockToLandscape();
      });
  
      props.navigation.addListener("blur", () => {
        Orientation.lockToPortrait();
      });
    }, [props.navigation]);

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

const [camtype, setCamtype] = useState(RNCamera.Constants.Type)


const [visible, setVisible] = useState(true)
const [urls, setUrls] = useState('')
const [cancelModal, setCancelModal] = useState(false)

const [videotoggle, setVideotoggle] = useState(true)

const [emptytext,setEmptytext]=useState('')



const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);

const containerStyle = {flex: 1, justifyContent: "center", alignItems: "center"};

useFocusEffect(
  React.useCallback(() => {
setVisible(true)
  }, [])
);
const [processing,setProcessing]=useState(false)
const [recording,setRecording]=useState(false)
const [paustexttoggle, setPaustexttoggle] = useState(true)
const [resumetext, setResumetext] = useState('(Tap Anywhere to Resume)')
const [pausetext, setPausetext] = useState('(Tap Anywhere to Pause)')
const [recordingtext, setrecordingtext] = useState('RECORDING')
const [pausedtext, setpausedtext] = useState('PAUSED')


useEffect(() => {
  console.log("recording",recording)
}, [recording])


const startRecording=async(camera,status)=> {
  console.log('status',status)
  console.log('helo')
  setVideotoggle(false)
setRecording(true)  // default to mp4 for android as codec is not set
if(urllls?.deviceOrientation){
  console.log('videoresumed',urllls.uri)
  const options = { path:urllls.uri,base64:true,};
  try {
    const data = await camera.recordAsync(options);
    urllls=data
    setUrls(data.uri + 'hello')
    console.log('uri1',urllls)
    
  } catch (error) {
    console.log('error',error)
  }


}
const data = await camera.recordAsync({base64:true,});
urllls=data
console.log('urllls',urllls,urllls?.deviceOrientation)
setUrls(data.uri)
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
console.log('urlsclg',RNCamera.Constants.Type)
},[RNCamera.Constants.Type])



const [cameratoggle, setCameratoggle] = useState(false)
const [recbutton, setRecbutton] = useState(true)
useEffect(()=>{
  console.log('recbutton',recbutton)
  },[recbutton])
const flipCamera=()=>{
  setCameratoggle(!cameratoggle)
//   let backs
//   let fronts
//   if(camtype?.back===0){
// backs=camtype.back=1
// fronts=camtype.front=0
//     setCamtype({back:backs,front:fronts})   
//     console.log('1',camtype)
//   }
//   else{
//     backs=camtype.back=0
// fronts=camtype.front=1
// setCamtype({back:backs,front:fronts})   
// console.log('2',camtype)
  
}

const [minsec, setMinsec] = useState(0)
let recstatus=false
const startTimer=()=>{
let time=0
    let myinterval=setInterval(() => {
      console.log('interval', minsec, recstatus,paustexttoggle)
      if(time<60 && recstatus && paustexttoggle){
        time++
        setMinsec(time)
      }

      if(time >= 60){
        clearInterval(myinterval)
        props.navigation.navigate('recordingdone')
      }
    }, 1000);
}

useEffect(()=>{
console.log('minsec',minsec)
},[minsec])
useEffect(()=>{
  console.log('recstatus',recstatus)
  },[recstatus])
  useEffect(()=>{
    console.log('paustexttoggle',paustexttoggle)
    },[paustexttoggle])
  
    const hidecanelModal=()=>{
      setCancelModal(false)
      props.navigation.navigate('feedback')
    }
  return (
    <>
      {/* <CustomDrawerButtonHeader title={'About'} /> */}
      <View style={{flex:1,position:'relative'}}>
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
       
       {isFocused && <RNCamera
          style={styles.preview}
          type={cameratoggle?camtype.front:camtype.back}
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
              <View style={{ flex: 1 }}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',}}>
            <TouchableOpacity onPress={()=>setCancelModal(true)} style={{width:40}}>
                <ENTcon
                name="cross"
                size={20}
                  resizeMode="contain"
                  style={{color:'#fff'}}
                /></TouchableOpacity>
                {recbutton ?(
<View> 
                 <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>RECORD 3 FREE KICKS</Text>
                 </View>):(
                 <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                 <MaterialICons
                name={paustexttoggle? 'record':'pause-circle'}
                size={20}
                  resizeMode="contain"
                  // style={{color:'#E94258',marginRight:10}}
                  style={paustexttoggle?styles.recicon:styles.pauseicon}
                />
<Text style={{fontSize:15,fontWeight:'bold',color:'#fff'}}>{paustexttoggle?recordingtext:pausedtext}</Text>
                 </View>)}
               <TouchableOpacity style={{width:40,}} onPress={()=>!recbutton && props.navigation.navigate('recordingdone')}>
                <Text style={recbutton?styles.hideone:styles.showdone}>Done</Text>
                </TouchableOpacity>
                </View>
                <View style={{display:'flex',flexDirection:'row',marginTop:70,justifyContent:'space-between'}}>
              {recbutton?
                <TouchableOpacity onPress={()=>{flipCamera()}} style={{width:40,display:'flex',flexDirection:'column',}}>
                <IONcon
                name="camera-reverse"
                size={20}
                  resizeMode="contain"
                  style={{color:'#fff'}}
                />
                <Text style={{color:'#fff',fontSize:13,fontWeight:'bold'}}>Flip</Text>
                </TouchableOpacity>:<View style={{width:40}}></View>}
                {!recbutton&&
                <TouchableOpacity onPress={()=>{setPaustexttoggle(!paustexttoggle);}}>
                <Text style={{color:'#585858',fontSize:16}}>{paustexttoggle?pausetext:resumetext}</Text></TouchableOpacity>}
                <View style={{width:40}}></View>
                </View>
                
              {recbutton ? 
              <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                  <MaterialICons
                  onPress={()=>{setRecbutton(false);recstatus=true;startTimer();}}
                name="record"
                size={180}
                  resizeMode="contain"
                  style={{color:'#E94258',}}
                /></View>
           :
           <View style={{height:200,position:'relative'}}>
           <Text style={{fontSize:14,color:'#fff',fontWeight:'bold',position:'absolute',bottom:30,left:'46%'}}>0:{minsec} / 1:00</Text></View>}
                {/* <TouchableOpacity onPress={() =>{
                  videotoggle?
                  startRecording(camera,status):
                  recordingPause(camera,status)
                  }} style={styles.capture}>
                    <Text style={{color:'#fff',fontSize:14}}>Tap anywhere to pause</Text> */}
                    
 {/* {urls.length>0&&
        <Text style={{color:'red',fontSize:20,zIndex:10000,position:'absolute',bottom:'10%',left:'5%',}}>{urls}</Text>} */}
                                 {/* </TouchableOpacity> */}

              </View>
              
            );
          }}
        </RNCamera>}
       
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
    <Provider>
    <Portal>

    <Modal visible={cancelModal} onDismiss={hidecanelModal} contentContainerStyle={containerStyle}>
          <View style={{marginHorizontal:20,height:'auto',position:'relative',maxHeight:546.742857143,width:370,padding:20,borderRadius:10,backgroundColor:'#fff',display:'flex',}}>
            <View style={{position:'absolute',top:'-30%',left:'44%',backgroundColor:'#fff',borderRadius:40}}>
          <MaterialICons
                name="cancel"
                size={60}
                  resizeMode="contain"
                  style={{color:'#F40000',}}
                /></View>
          <Texts style={{fontSize:16,fontWeight:'bold',color:'#000'}}>Cancel Recording</Texts>
          <View style={{height:23}}></View>

          <Texts>Are you sure you want to delete this recording?</Texts>
          <View style={{height:28}}></View>

          <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
          <Button style={{}} ><Texts style={{color:'#7BAC42',fontSize:12}}> Cancel</Texts> 

      </Button>
      <Button style={{width:90,borderRadius:14,backgroundColor:'#7BAC42',color:'#fff'}} onPress={hidecanelModal}>
      <Texts style={{color:'#fff'}}>Yes</Texts> 
      </Button>
      </View>
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
  showdone:{
color:'#fff',
  },
  hideone:{
    opacity: 0, height: 0
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
  recicon:{
    color:'#E94258',marginRight:10
  },
  pauseicon:{
    color:'#fff',marginRight:10
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
    paddingVertical:22,
    paddingHorizontal:24,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  capture: {
    flex: 1,
    // backgroundColor: '#E94258',
    height:170,
    width:170,
    alignSelf: 'center',
  },

});

export default MeasureSkillView;


