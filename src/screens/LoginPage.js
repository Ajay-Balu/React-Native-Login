import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import onDisplayNotification from '../components/NotificationManager';
import axios from 'axios';

const LoginPage = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleSubmit() {
    const userData ={
      email: email,
      password
    }
  
    axios.post("http://192.168.0.108:3001/login",userData)
    .then(res => {
      console.log(res.data);
      if(res.data.status == 'ok'){
        navigation.navigate('Home',{userName: res.data.userName});
        onDisplayNotification('Logged in successfully','User Logged-in successfully')
      }else{
        alert(res.data.data)
      }
    }).catch(error => {
      console.error("Error logging in: ", error);
    });
  }
  

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Image
        source={require('../components/firebase.png')}
        resizeMode="cover"
      />
      <TextInput
        className='w-4/5 mt-4 p-3 border border-gray-400 rounded'
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className='w-4/5 mt-4 p-3 border border-gray-400 rounded'
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={() => handleSubmit()}
        className='w-4/5 mt-8 p-3 bg-red-500 rounded-lg items-center justify-center'
      >
        <Text className='text-white'>Login</Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
