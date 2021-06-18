import React, {useEffect, useState} from 'react';

import {
  ScrollView,
  InlineButton,
  StyleSheet,
  View,
  Button,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import theme from '../../../../theme';
// import { ScrollView } from 'react-native-gesture-handler';
import {CustomDrawerButtonHeader} from '../../../components/Header';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import VideoPlayer from 'react-native-video-controls';
import {ProgressBar, Colors} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

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

const BeatThatView: () => React$Node = (props) => {
  const [timerr, setTimerr] = useState(0);
  const [showthumbnail, setShowthumbnail] = useState(true);

  const [data1, setData1] = useState([
    {
      id: '1',
      image: IMAGES.image1,
      name: 'Measure a skill',
      challenge: 'Measure a skill',
      date: '20/21/2020',
      connections: 40,
      avatar: require('../../../assets/images/black1.jpg'),
    },
    {
      id: '2',
      image: IMAGES.image2,
      name: 'Stepover',
      challenge: 'beat that',
      date: '20/21/2020',
      connections: 51,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    // { id: '3', image: IMAGES.image3,name:'abcde' },
    {
      id: '4',
      image: IMAGES.image4,
      name: 'Juggling',
      challenge: 'your result',
      date: '20/21/2020',
      connections: 44,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    {
      id: '5',
      image: IMAGES.image5,
      name: 'Shooting',
      challenge: 'beat that',
      date: '20/21/2020',
      connections: 22,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    {
      id: '6',
      image: IMAGES.image6,
      name: 'Passing',
      challenge: 'your result',
      date: '20/21/2020',
      connections: 9,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    {
      id: '7',
      image: IMAGES.image7,
      name: 'Heading',
      challenge: 'beat that',
      date: '20/21/2020',
      connections: 17,
      avatar: require('../../../assets/images/imagesss.png'),
    },
  ]);
  const [data2, setData2] = useState([
    {
      id: '1',
      image: IMAGES.image8,
      name: 'Free Kick',
      challenge: 'Your Result',
      date: '20/21/2020',
      connections: 40,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    {
      id: '2',
      image: IMAGES.image2,
      name: 'Stepover',
      challenge: 'beat that',
      date: '20/21/2020',
      connections: 51,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    // { id: '3', image: IMAGES.image3,name:'abcde' },
    {
      id: '4',
      image: IMAGES.image4,
      name: 'Juggling',
      challenge: 'your result',
      date: '20/21/2020',
      connections: 44,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    {
      id: '5',
      image: IMAGES.image5,
      name: 'Shooting',
      challenge: 'beat that',
      date: '20/21/2020',
      connections: 22,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    {
      id: '6',
      image: IMAGES.image6,
      name: 'Passing',
      challenge: 'your result',
      date: '20/21/2020',
      connections: 9,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    {
      id: '7',
      image: IMAGES.image7,
      name: 'Heading',
      challenge: 'beat that',
      date: '20/21/2020',
      connections: 17,
      avatar: require('../../../assets/images/imagesss.png'),
    },
  ]);

  const datas = {
    heading:
      'Lorem Ipsum is simply dummy text industry industry industry industry industry industry industry of the printing and typesetting industry ',
    skills: [
      {
        name: 'Measure a skill',
      },
      {
        name: 'Stepover',
      },
      {
        name: 'Juggling',
      },
      {
        name: 'Shooting',
      },
      {
        name: 'Passing',
      },
      {
        name: 'Heading',
      },
    ],
  };
  const progress = [
    {
      name: 'Stepover',
      skill: 0.6,
    },
    {
      name: 'Juggling',
      skill: 0.2,
    },
    {
      name: 'Shooting',
      skill: 0.9,
    },
    {
      name: 'Passing',
      skill: 0.3,
    },
    {
      name: 'Heading',
      skill: 0.1,
    },
  ];

  const [data4, setData4] = useState([
    {
      id: '1',
      image: IMAGES.image8,
      name: 'Free Kick',
      challenge: 'Your Result',
      date: '20/21/2020',
      connections: 40,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    {
      id: '2',
      image: IMAGES.image2,
      name: 'Stepover',
      challenge: 'beat that',
      date: '20/21/2020',
      connections: 51,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    // { id: '3', image: IMAGES.image3,name:'abcde' },
    {
      id: '4',
      image: IMAGES.image4,
      name: 'Juggling',
      challenge: 'your result',
      date: '20/21/2020',
      connections: 44,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    {
      id: '5',
      image: IMAGES.image5,
      name: 'Shooting',
      challenge: 'beat that',
      date: '20/21/2020',
      connections: 22,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    {
      id: '6',
      image: IMAGES.image6,
      name: 'Passing',
      challenge: 'your result',
      date: '20/21/2020',
      connections: 9,
      avatar: require('../../../assets/images/imagesss.png'),
    },
    {
      id: '7',
      image: IMAGES.image7,
      name: 'Heading',
      challenge: 'beat that',
      date: '20/21/2020',
      connections: 17,
      avatar: require('../../../assets/images/imagesss.png'),
    },
  ]);

  let abc = data4.map((data) => (
    <Image
      source={data.avatar}
      style={{
        width: 25,
        borderColor: '#78B733',
        borderWidth: 1,
        height: 24,
        borderRadius: 20,
        marginRight: -11,
        // borderColor:'#d35647',
        resizeMode: 'cover',
      }}
    />
  ));
  let player;
  const onBuffer = () => {
    console.log('helen');
  };
  const videoError = () => {
    console.log('errror');
  };
  const loadingHandler = () => {
    setShowthumbnail(false);
    console.log('loading');
  };
  const endingHandler = () => {
    console.log('errors');
  };

  return (
    <>
      <CustomDrawerButtonHeader title={'About'} />
      <ScrollView
        style={{flex: 1, paddingHorizontal: 25, backgroundColor: '#fff'}}>
        <View style={{height: 20}}></View>
        <Text style={{fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>
          OLIVIER GEORGE SAYS BEAT THATss{' '}
        </Text>
        <View style={{height: 30}}></View>

        {/* <CustomSurface style={styles.cardContainer}> */}
        {/* <View> */}

        {/* <Text  style={styles.headingstyle}>HELLO, OLIVIER GEORGE</Text> */}
        <View style={{height: 300, width: 360}}>
          {showthumbnail && (
            <Image
              resizeMode="contain"
              style={{height: '55%', width: '85%'}}
              source={require('../../../assets/images/pausebutton.jpg')}
            />
          )}
          <VideoPlayer
            source={{
              uri:
                'https://res.cloudinary.com/n4beel/video/upload/v1623929802/Y2Mate.is_-_10_Impossible_Goals_Scored_By_Lionel_Messi_That_Cristiano_Ronaldo_Will_Never_Ever_Score_HD-5twveLmWhvI-480p-1623687430417_fnppoj.mp4',
            }} // Can be a URL or a local file.
            //  style={{ width: 300, height: 300 }}
            ref={(ref) => {
              player = ref;
            }} // Store reference
            onBuffer={onBuffer}
            onLoad={loadingHandler}
            onEnd={endingHandler}
            //  controls={true}          // Callback when remote video is buffering
            onError={videoError} // Callback when video cannot be loaded
            style={styles.backgroundVideo}
          />
        </View>
        <View style={{height: 10}}></View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>FREE KICK</Text>
            <View style={{height: 4}}></View>

            <Text style={{fontSize: 13, fontWeight: 'normal'}}>
              May 23,2020
            </Text>
          </View>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 13, color: 'grey', marginRight: 8}}>
              5 +
            </Text>
            {abc}
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: '#00000029',
            borderBottomWidth: 1,
            marginTop: 20,
          }}></View>
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 15}}>
          ANALYSIS
        </Text>
        <FlatList
          style={{marginTop: 20}}
          data={progress}
          renderItem={({item, index}) => (
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <Text style={{marginTop: 7, fontSize: 15}}>{item.name}</Text>
              <ProgressBar
                style={{height: 9, borderRadius: 7, marginTop: 6}}
                progress={item.skill}
                color={'#79AB42'}
              />
            </View>
          )}
        />
        <View style={{height: 20}}></View>
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
    paddingHorizontal: 20,
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
    margin: 12,
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
  imagewrapper: {
    height: 130,
    marginHorizontal: 21,
    marginTop: 15,
  },
  headingstyle: {
    color: 'green',
    fontSize: 18,
    marginLeft: 21,
    marginTop: 20,
  },
  img1property: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  headingContain: {
    marginBottom: 30,
  },
  avatarproperties: {
    // position: 'absolute',
    // top:'15%',
    // left:'4%',
    color: '#fff',
    marginRight: 6,
  },
  avatar2properties2: {
    color: '#fff',
    marginRight: 10,
    marginTop: 5,
    // justifyContent:'flex-end'
  },
  img1heading: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    maxWidth: 350,
    // position: 'absolute',
    // top:'15%',
    // left:'4%',
  },
  imagesheading: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    maxWidth: 105,
  },
  imagesheading1: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  measureyourskillheading: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: '#78AB41',
  },
  dateheading: {
    color: '#AAA8A8',
    fontWeight: 'normal',
    fontSize: 13,
    marginTop: 2,
  },
  imageheadingplacing: {
    position: 'absolute',
    bottom: '13%',
    left: '14%',
  },
  measureyourskillstyling: {
    height: 28,
    position: 'absolute',
    bottom: '43%',
    left: '14%',
    borderRadius: 6,
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
  },
  carouselContainer: {
    marginTop: 50,
  },
  slidesContiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerSlide: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 40,
  },
  slideTitle: {
    textTransform: 'uppercase',
    marginBottom: 20,
    color: '#F86300',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  slideContent: {
    textAlign: 'center',
    color: '#303030',
    fontSize: 17,
  },
  highlighted: {
    color: '#F86300',
  },
  action: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    width: '100%',
  },
});

export default BeatThatView;
