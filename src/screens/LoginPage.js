import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
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
      }else{
        alert(res.data.data)
      }
    }).catch(error => {
      console.error("Error logging in: ", error);
    });
  }
  

  return (
    <View className = "flex flex-col items-center justify-center object-cover h-full bg-gray-200">
     <View className = "bg-white p-8 rounded-lg shadow-md w-80 ">
        <TextInput placeholder="Email" value={email} onChangeText={setEmail}/>
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true}  />
        <Button title="Login" onPress={() => handleSubmit()} />
      </View>
    </View>
  );
};

export default LoginPage;
