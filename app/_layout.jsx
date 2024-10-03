import { Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { React,useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
  'Raleway-Black': require('../assets/fonts/Raleway-Black.ttf'),
  'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
  'Raleway-ExtraBold': require('../assets/fonts/Raleway-ExtraBold.ttf'),
  'Raleway-ExtraLight': require('../assets/fonts/Raleway-ExtraLight.ttf'),
  'Raleway-Light': require('../assets/fonts/Raleway-Light.ttf'),
  'Raleway-Medium': require('../assets/fonts/Raleway-Medium.ttf'),
  'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
  'Raleway-SemiBold': require('../assets/fonts/Raleway-SemiBold.ttf'),
  'Raleway-Thin': require('../assets/fonts/Raleway-Thin.ttf'),
  'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
  'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
  'Montserrat-ExtraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
  'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
  'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
  'Montserrat-Thin': require('../assets/fonts/Montserrat-Thin.ttf'),
  });

  useEffect(()=>{
    if(error) throw error;

    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  },[fontsLoaded, error])

  if(!fontsLoaded)
    return null;

  if(!fontsLoaded && !error)
    return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="(auth)" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  )
}

export default RootLayout

