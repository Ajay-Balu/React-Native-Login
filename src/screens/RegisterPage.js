import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, TouchableOpacity } from 'react-native';
import onDisplayNotification from '../components/NotificationManager';
import axios from 'axios'



const RegisterPage = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(){

    const userData ={
      userName: userName,
      email,
      password
    }
  
    axios.post("http://192.168.0.108:3001/register",userData)
    .then(res => {console.log(res.data);
      if(res.data.status == 'ok'){
        navigation.navigate('Login')
        onDisplayNotification('Registered successfully', 'User Registered successfully')
      }else if(res.data.data.length > 2){
        console.log((res.data.data).length);
        alert("Fields cannot be empty")
      }else{
        alert(JSON.stringify(res.data.data))
      }
    })
    .catch(e => console.log(e));
  
  }

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Image
        source={require('../components/secure.png')}
        resizeMode="cover"
      />
      <TextInput
        className='w-4/5 mt-8 p-3 border border-gray-400 rounded'
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
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
        <Text className='text-white'>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')} 
        className='mt-4'
      >
        <Text className='text-blue-500'>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterPage;
