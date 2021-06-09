import React,{useState} from 'react';
import { ScrollView,InlineButton,StyleSheet, View, Text, Dimensions ,Image,SafeAreaView,TouchableOpacity,FlatList} from 'react-native';
import CustomSurface from '../../../components/Surface';
import theme from '../../../../theme';
import { InlineButton as Button } from '../../../components/Button';
const { height, width } = Dimensions.get('window');
import img1 from '../../../assets/images/jpegxt-home.jpg'
import { Card } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel'
// import { ScrollView } from 'react-native-gesture-handler';

const vh = height / 100;
const vw = width / 100;

const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: require('../../../assets/images/Main-banner.jpg'),
  image2: require('../../../assets/images/Main-banner.jpg'),
  // image3: require('../../../assets/images/free kick.jpg'),
  image4: require('../../../assets/images/Beat-that.png'),
  image5: require('../../../assets/images/Beat-that.png'),
  image6: require('../../../assets/images/Beat-that.png'),
  image7: require('../../../assets/images/Beat-that.png')
};

const WelcomeView: () => React$Node = (props) => {
  // const [index, setIndex] = useState(0)
  // const [sliders] = useState([
  //   {
  //     title: "Subscription",
  //     image: "https://res.cloudinary.com/n4beel/image/upload/v1597980909/slider-1_b540gw.png",
  //     content: "Front Office is absolutely free for 14 days, after which you will be asked to subscribe"
  //   },
  //   {
  //     title: "Connect Broker Account",
  //     image: "https://res.cloudinary.com/n4beel/image/upload/v1597980909/slider-2_sraxtf.png",
  //     content: "Front Office connects to your IG Markets or OANDA FX spreadbet account"
  //   },
  //   {
  //     title: "Select Risk Tolerence",
  //     image: "https://res.cloudinary.com/n4beel/image/upload/v1597980909/slider-3_pfjyxm.png",
  //     content: "Risk Management is key to portfolio management and trading, and our fully integrated tools are designed for you and protect your downside risk"

  //   },
  //   {
  //     title: "Grow Your Portfolio",
  //     image: "https://res.cloudinary.com/n4beel/image/upload/v1597980909/slider-4_newban.png",
  //     content: "Simply select your trades or markets, start the dynamic decision making algorithm and relax. In a few clicks you will be growing your portfolio"
  //   },
  // ])
  
const [images, setImages] = useState([
  { id: '1', image: IMAGES.image1,name:'abc' },
  { id: '2', image: IMAGES.image2,name:'abcd' },
  // { id: '3', image: IMAGES.image3,name:'abcde' },
  { id: '4', image: IMAGES.image4,name:'abcef' },
  { id: '5', image: IMAGES.image5,name:'abcefg' },
  { id: '6', image: IMAGES.image6,name:'abc' },
  { id: '7', image: IMAGES.image7,name:'abcw' }
]);

// const renderItem = ({ item, index }) => {
//   return (
    
//     <View style={styles.slide}>
//       <View style={styles.innerSlide}>
//         <Image style={styles.slideImage} source={{ uri: item.image }} resizeMode="contain" />
//         <Text style={styles.slideTitle}>{item.title}</Text>
//         <Text style={styles.slideContent}>{item.content}</Text>
//       </View>
//     </View>
//   );
// }

  // console.log('console in view -->',props.timerSecond.length)
  return (
    <ScrollView style={{flex:1 }}>
      {/* <CustomSurface style={styles.cardContainer}> */}
        {/* <View> */}
          <Text  style={styles.headingstyle}>HELLO, OLIVIER GEORGE</Text>
        
  <View style={styles.imagewrapper}>
  <Image style={styles.img1property} source={require('../../../assets/images/Main-banner.jpg')}/>
  </View>
  {/* <View style={styles.slidesContiner}> */}

  <View style={{alignItems:'center' }}>
      {/* <Carousel
        layout='default'
        data={images}
        sliderWidth={width}
        itemWidth={width/3}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            style={{ width: '100%', height: '100%',borderRadius:20 }}
            resizeMode='contain'
            source={item?.image}
          />
        )}
      /> */}
       <FlatList
      style={{marginTop:25,marginLeft:13,}}
    horizontal={true} 
    data={images}
    renderItem={ ({ item, index }) => (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image source={item?.image} /* Use item to set the image source */
        key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
        style={{
          width:130,
          
          height:170,
          borderRadius:8,
          // borderColor:'#d35647',
          resizeMode:'cover',
          margin:8
        }}
      />
      </View>
    )}
  />
      <FlatList
      style={{marginTop:30,     }}
      boxWithShadow={{ shadowColor: 'pink',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5}}
    vertical={true} 
    data={images}
    renderItem={ ({ item, index }) => (
      <View style={{alignItems: 'center', justifyContent: 'center',   }}>
      <Image source={item?.image} /* Use item to set the image source */
        key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
        style={{
          width:375,
          height:200,
          borderWidth:2,
          borderRadius:12,
marginTop:12,
          // borderColor:'#d35647',
          resizeMode:'cover',
          margin:8
        }}
      />
      </View>
    )}
  />
    </View>
    
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
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingLeft: config.deviceWidth * 0.1,
    //    width : config.deviceWidth * 1.2
    margin:12
  },
  cardContainer: {
    flex: 0.8,
    width: vw * 90,
    marginLeft: vw * 5,
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center',
    elevation: 4
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
  }

});

export default WelcomeView;
