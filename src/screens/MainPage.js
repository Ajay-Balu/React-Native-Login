import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';



const GreetingsPage = ({ route }) => {
  const { userName } = route.params;

  return (
    <ImageBackground source={require('../components/profile.webp') } resizeMode="cover">
      <View className = "flex flex-col items-center justify-start object-cover h-full bg-transparent">
        <Image source={require('../components/avatar.jpg')} className='mt-36 rounded-full'/>
        <Text className="mt-20 text-4xl">Welcome,{userName}!</Text>
        <View></View>
      </View>
    </ImageBackground>
  );
};

export default GreetingsPage;
