import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { setFirstTime } from '../state/actions/userActions';
import { useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 320,
    height: 320,
    borderRadius:160,
    resizeMode:'contain'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 32,
  },
  text: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 64,
    marginTop: 16,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCircleText: {
    fontSize: 18,
    color: '#222',
  },
});

const slides = [
  {
    key: 1,
    title: 'Data Collection & Filtration',
    text: 'This is the first screen of the onboarding',
    image: "https://media.istockphoto.com/id/464806966/vector/concepts-for-creative-process-big-data-filter-data-tunnel-analysis.jpg?s=612x612&w=0&k=20&c=Qrd9dKw4_QxVqeFmP8FSOHl9ITP_QQLRQxuFGQXaXfs=",
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Data Management & Visualization',
    text: 'This is the second screen of the onboarding',
    image: "https://www.callcentrehelper.com/images/stories/2019/11/people-workin-data-760.jpg",
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Managing Resources',
    text: 'This is the last screen of the onboarding',
    image: "https://blog.planview.com/wp-content/uploads/2015/03/3asset.jpg",
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    title: 'Flow of Donation Securely',
    text: 'This is the last screen of the onboarding',
    image: "https://thumbs.dreamstime.com/b/charity-donation-doodle-concept-design-style-illustration-giving-help-donating-money-clothing-food-medicines-line-style-web-67280486.jpg",
    backgroundColor: '#febe29',
  },
];

const Onboarding = ({ navigation }) => {
  const dispatch=useDispatch()
  const renderItem = ({ item,index }) => (
    <View style={[styles.slide, { backgroundColor: "white" }]}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
      {index===3 && <TouchableOpacity style={{backgroundColor:'#1E90FF',marginTop:16,padding:15,borderRadius:7}}
      onPress={() => {dispatch(setFirstTime(false)); navigation.navigate('Login')}}>
        <Text style={{color:'white',fontWeight:'bold'}}>Get Started</Text>
      </TouchableOpacity>}
    </View>
  );

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.buttonCircleText}>Done</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      activeDotStyle={{backgroundColor:'#1E90FF',width:35,height:8,marginHorizontal:0}}
      dotStyle={{backgroundColor:'#F5F5F5',width:35,height:8,marginHorizontal:0}}
      renderItem={renderItem}
      //renderDoneButton={renderDoneButton}
      //onDone={}
    />
  );
};

export default Onboarding;

