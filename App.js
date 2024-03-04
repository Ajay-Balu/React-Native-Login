import React,{useEffect} from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage, RegisterPage, GreetingsPage} from './src/screens';



const Stack = createNativeStackNavigator();

export default function App() {

  const checkApplicationPermission = async () =>{
    if (Platform.OS == 'android'){
      try{
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      } catch(error){}
    }
  };

  useEffect(()=>{
    checkApplicationPermission();
  },[]);
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={GreetingsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


