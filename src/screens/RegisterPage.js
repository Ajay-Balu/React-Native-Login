import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
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
    <View className= "flex flex-col items-center justify-center object-cover h-full bg-gray-200">
     <View className= "bg-white p-8 rounded-lg shadow-md w-80 ">
        <TextInput placeholder="Username" value={userName} onChangeText={setUserName}/>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail}/>
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
        <Button title="Register" onPress={() => handleSubmit()} />
        <Text className="mt-5" onPress={() => navigation.navigate('Login')}>Already have an account? Login</Text>
      </View>
    </View>
  );
};

export default RegisterPage;
