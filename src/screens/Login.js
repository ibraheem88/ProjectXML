import React, { useState ,useRef} from 'react';
import { View, Text,Alert, TextInput, TouchableOpacity, StyleSheet, ImageBackground,Pressable, Image } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput'
import { setUserInfo } from '../state/actions/userActions';
import { useDispatch } from 'react-redux';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const rnBiometrics = new ReactNativeBiometrics()


const Login = ({navigation}) => {
  const dispatch=useDispatch()
  let otpInput = useRef(null);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  const handleSendOtp = () => {
    if(phone.length>8){
      setShowOtp(true);
    }
    console.log('Sending OTP to:', phone);
    
  };

  const handleLogin = () => {
    if(otp.length==4){
      dispatch(setUserInfo({name:"",phone,token:'1234'}))
      navigation.replace('Home')
    }
    console.log('Logging in with OTP:', otp);
  };

  const handleRegister= () => {
    navigation.navigate('Register')
  }

  const resendOtp=() => {
    console.log('rensend otp')
  }

  const handleFingerPrint=async()=>{
    const biometryType = await rnBiometrics.isSensorAvailable()
if (biometryType === BiometryTypes.Biometrics) {
  console.log("Fingerprint")
}
else{
  Alert.alert("Error","No Finger Print Sensor Found")
}
  }

  return (
    <ImageBackground source={{uri:"https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?w=2000"}} style={styles.container}>
      <View style={{backgroundColor:'#CCEFFF',paddingHorizontal:20,paddingVertical:30,alignItems:'center',marginHorizontal:20,borderRadius:5}}>
      <Text style={styles.title}>Login</Text>
      <MaterialIcons
      onPress={()=>handleFingerPrint()}
      name='fingerprint'
      size={70}
      color={'black'}
      style={{alignSelf: "center",marginBottom:20}}/>
      <Text style={{color:'black',fontSize:20,marginBottom:20,fontWeight:'bold'}}>Or</Text>
      {!showOtp && (<><TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        placeholderTextColor="black"
      />
        <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:16,color:'black'}}>Don't have an account?</Text>
          <Pressable onPress={()=>handleRegister()}>
            <Text style={{fontSize:16,color: 'black',marginLeft:10,fontWeight:'bold'}}>Register</Text>
          </Pressable>
          </View></>
        
      )}
      {showOtp && (
        <View >
          {/* <TextInput
            style={styles.input}
            placeholder="OTP"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
            placeholderTextColor="black"
          /> */}
          <OTPTextInput ref={e => (otpInput = e)} handleTextChange={(text=>setOtp(text))} containerStyle={{marginBottom:20}}/>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:16,color:'black'}}>Din't get a code?</Text>
          <Pressable onPress={()=>resendOtp()}>
            <Text style={{fontSize:16,color: 'black',marginLeft:10,fontWeight:'bold'}}>Resend OTP</Text>
          </Pressable>
          </View>
        </View>
      )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    opacity:0.87,
    resizeMode:'contain'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    borderRadius: 5,
    color: 'black',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginBottom:10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Login;
