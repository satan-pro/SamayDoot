import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Redirect, router } from 'expo-router';
import { ScrollView, Text, View, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton';
import images from "../constants/images"
import FormField from '../components/FormField';

const {width, height} = Dimensions.get('window')

export default function App() {
  const[form, setForm] = useState({
    email:"",
    password:"",
  })
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className="h-[100vh] w-full flex-col items-center justify-start pt-[50px] p-4">
            <Text className="font-ralewayBlack text-5xl">Samay Doot</Text>
              <Image 
                source={images.boxes2}
                style={{
                  width: width*0.9,
                  height: height*0.5,
                }}
                resizeMode="contain"
              />
            <View className="gap-4">
              <Text className="text-left font-ralewayBold text-[10vw] px-4">Postal Deliveries made <Text className="text-purple-primary">Easier</Text></Text>
              <Text className="font-ralewayRegular text-lg px-4">Experience hassle free delivery at your own convenience</Text>
            </View>
            <View className="w-[90%]">
            <CustomButton 
              title = "Get Started"
              handlePress = {()=>{router.push('/collect')}}
              containerStyles = "w-full mt-7"
            />
            </View>
        </View>
      </ScrollView>
      
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
