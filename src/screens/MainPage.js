import React,{useEffect} from 'react';
import { View, Text } from 'react-native';

const GreetingsPage = ({ route }) => {

  

  const { userName } = route.params;
  return (
    <View className = "flex flex-col items-center justify-center object-cover h-full bg-gray-200">
      <Text className="text-5xl">Welcome,{userName}!</Text>
    </View>
  );
};

export default GreetingsPage;
