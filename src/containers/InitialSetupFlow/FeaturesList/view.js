import React,{useRef} from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomSurface from '../../../components/Surface';
import { RNCamera } from 'react-native-camera';

import theme from '../../../../theme';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/AntDesign';
import { Divider } from 'react-native-paper';
import { CustomBackButtonHeader } from '../../../components/Header';

const { height, width } = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const List = ({ icon, text }) => {

  return (
    <>
      <View style={styles.container}>
        {/* <View style={styles.listIcon}>
          <Image source={icon} />
        </View>
        <View style={styles.listTextContain}>
          <Text style={styles.listText}>{text}</Text>
        </View>
        <View style={styles.listLockContain}>
          <Image source={require('../../../assets/images/lock.png')} />
        </View> */}
 
      </View>
      <Divider />
    </>
  );
};

const FeatureListView: () => React$Node = (props) => {
  
  
    const camera = useRef(null);

    const Submit=async()=>{
      if(camera){
        const { uri, codec = "mp4" } = await camera.current.recordAsync();
        console.info(uri);
      }
    }

    const Stop=()=>{
      camera.current.stopRecording();
    }
    // 30 seconds
  //   if(videoRecorder){
  //  await videoRecorder.open({ maxLength: 30,orientation:'landscapeLeft' },(data) => {
  //       console.log('captured data', data);
  //   });
  // }
  const RenderCam=()=>{
    return <RNCamera
    ref={camera}
   style={styles.preview}
   defaultVideoQuality={RNCamera.Constants.VideoQuality["480p"]}
   type={RNCamera.Constants.Type.front}
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
  />
  
}
  return (
    <View style={styles.container}>
      <CustomBackButtonHeader backFunction={props.navigateBack} title={"Features"} />
      
      <View style={styles.container}>
        <View style={{flexDirection:'row',height:100}}>
        <View style={{width:'30%'}}>
             {RenderCam()}
        </View>
        <View style={{width:'70%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontWeight:'bold',fontSize:16}}>Timer Here </Text>
              <Text style={{fontWeight:'bold',fontSize:18}}>Totel Question </Text>
        </View>
        </View>
 
        
        <View style={{flex:1,backgroundColor:'white',margin: 10}}>
            <Text style={{textAlign:'center',margin:5,fontWeight:'bold',fontSize:20}}>Ulive Test Title</Text>
            <View>
               <View>
                    <Text style={{margin: 20}}>Q.1) Most cameras have a Auto Focus feature. It adjusts your camera lens position automatically depending on the pixels seen by your camera.</Text>
                </View>
              <View>
              {[1,2,3,4].map(data=>{
                 return <Text key={data} style={{margin: 15,borderBottomColor:'gray',borderBottomWidth:1}}>option is {data}</Text>
              })
              }
              </View>
            </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <Pressable onPress={Submit} 
           style={{height: 50,backgroundColor:'#000',width:'100%',alignItems:'center',justifyContent:'center'}}>
             <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Submit</Text>
          </Pressable>
          {/* <Pressable onPress={Stop} 
           style={{height: 50,backgroundColor:'black',width:'50%',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Stop Rec</Text>
          </Pressable> */}
        </View>
      
      </View>

      {/* <View style={styles.headerContainer}>
        <Icon
          name="arrowleft"
          size={30}
          color="#000000"
          onPress={() => props.navigateBack()}
        />
      </View>
      <View style={styles.headerContainer} >
        <Text style={styles.heading}>Features</Text>
      </View> */}
      <View style={{ padding: 20, flex: 1 }}>

        <View style={styles.container}>
          {/* {props.featureDetails.map((item, index) => (
            
            <List {...item} key={index} />
          ))} */}
          {/* <TouchableOpacity onPress={start}>
          	<Text>Starttt</Text>
          </TouchableOpacity>
          <VideoRecorder ref={(ref) => { videoRecorder = ref}}/> */}
        </View>
        <View style={styles.bottomActionContain}>
          <Button
            label="Next"
            style={{ alignSelf: 'center' }}
            onPress={props.navigateToNext}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  preview: {
    width:'100%',
    height:55
 },
  headerContainer: {
    flex: 0.1,
  },
  listContainer: {
    flex: 0.7,
    // justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  listIcon: {
    flex: 0.14,
    marginLeft: 5,
    // backgroundColor: 'yellow',
  },
  listItemContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: "center",
    // backgroundColor: 'green',
  },
  listTextContain: {
    flex: 0.7,
  },
  listText: {
    fontSize: 14,
    fontFamily: theme.font.bold,
    color: theme.color.secondary,
  },
  listLockContain: {
    flex: 0.2,
  },
  heading: {
    fontFamily: theme.font.bold,
    fontSize: 20,
    // marginBottom: 30,
    marginLeft: 5,
  },
  bottomActionContain: {
    flex: 0.2,
    justifyContent: 'space-around',
    // backgroundColor: 'yellow',
  },
});

export default FeatureListView;
