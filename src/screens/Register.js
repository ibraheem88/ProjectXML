import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Pressable,
  Alert
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import citiesJSON from '../assets/cities.json';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

const provinces = [  'ICT',  'Gilgit-Baltistan',  'Khyber Pakhtunkhwa',  'Punjab',  'Sindh',  'Azad Kashmir',];

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cities, setCities] = useState(citiesJSON);
  const [nic, setNic] = useState('');
  const [province, setProvince] = useState('ICT');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [society, setSociety] = useState('');
  const [address, setAddress] = useState('');

  const rnBiometrics = new ReactNativeBiometrics()

  const handleRegister = () => {
    // API call to register user with the given data
    if (
      name.length > 0 &&
      phone.length > 0 &&
      nic.length > 0 &&
      city.length > 0 &&
      area.length > 0 &&
      society.length > 0 &&
      address.length > 0
    ) {
      console.log('Name:', name);
      console.log('Phone:', phone);
      console.log('NIC:', nic);
      console.log('Province:', province);
      console.log('City:', city);
      console.log('Area:', area);
      console.log('Society/Area Name:', society);
      console.log('Address:', address);
      navigation.goBack();
    }
  };

  const handleLogin = () => {
    // Navigate to login screen
    navigation.goBack();
  };

  const handleFingerPrint=async()=>{
    const biometryType = await rnBiometrics.isSensorAvailable()
if (biometryType === BiometryTypes.Biometrics) {
  console.log("Fingerprint")
}else{
  Alert.alert("Error","No Finger Print Sensor Found")
}
  }

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri:
          'https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?w=2000',
      }}
    >
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        placeholderTextColor="black"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="phone-pad"
        value={phone}
        placeholderTextColor="black"
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="NIC"
        keyboardType="numeric"
        value={nic}
        placeholderTextColor="black"
        onChangeText={setNic}
      />
      <View style={{flexDirection:'row'}}>
      <SelectDropdown
      defaultButtonText={"Province"}
      showsVerticalScrollIndicator={false}
      dropdownStyle={{backgroundColor:'white',opacity:0.9,borderRadius:5}}
      buttonStyle={[styles.input,{padding:10,width:'38%',height:45,backgroundColor:'transparent',marginLeft:'5%'}]}
	data={provinces}
	onSelect={(selectedItem, index) => {
		setProvince(selectedItem)
	}}
	
/>
<SelectDropdown
  defaultButtonText={"City"}
  buttonStyle={[styles.input,{padding:10,width:'38%',height:45,backgroundColor:'transparent'}]}
  dropdownStyle={{backgroundColor:'white',opacity:0.9,borderRadius:5}}
  data={cities[province]}
	onSelect={(selectedItem, index) => {
		setCity(selectedItem)
	}}
	
/>
</View>
      <TextInput
        style={styles.input}
        placeholder="Area"
        value={area}
        placeholderTextColor="black"
        onChangeText={setArea}
      />
      <TextInput
        style={styles.input}
        placeholder="Society/Area Name"
        value={society}
        onChangeText={setSociety}
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        multiline
        value={address}
        placeholderTextColor="black"
        onChangeText={setAddress}
      />
            <MaterialIcons
      onPress={()=>handleFingerPrint()}
      name='fingerprint'
      size={70}
      color={'black'}
      style={{alignSelf: "center",marginBottom:0}}/>
      <Text style={{color:'black',fontSize:16,marginBottom:20}}>Register Finger Print</Text>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:16,color:'black'}}>Already have an account?</Text>
          <Pressable onPress={()=>handleLogin()}>
            <Text style={{fontSize:16,color: 'black',marginLeft:10,fontWeight:'bold'}}>Login</Text>
          </Pressable>
          </View>
    </ImageBackground>
  );
};

export default Register

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    title: {
      fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    },
    input: {
      width: '80%',
      height: '6%',
      padding: 12,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
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