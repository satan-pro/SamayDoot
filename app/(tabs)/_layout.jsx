import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router';
import React from 'react'
import icons from "../../constants/icons"

const TabIcon = ({icon, color, name, focused}) => {
    return(
        <View className="items-center justify-center">
            <Image 
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            {/* <Text className={`${focused? 'font-ralewayBold': 'font-ralewayLight'} text-s`}>
                {name}
            </Text> */}
        </View>
    )
}
const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#000000",
                tabBarInactiveTintColor: '#848891',
                tabStyle: {
                    borderTopWidth: 1,
                    height: 84,
                    paddingVertical: 20,
                }
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={icons.home}
                            color = {color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
                />
                <Tabs.Screen
                name="send"
                options={{
                    title: "Send",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={icons.delivery}
                            color = {color}
                            name="Send"
                            focused={focused}
                        />
                    )
                }}
                />
                <Tabs.Screen
                name="collect"
                options={{
                    title: "Collect",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={icons.collect}
                            color = {color}
                            name="Collect"
                            focused={focused}
                        />
                    )
                }}
                />
                <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={icons.profile}
                            color = {color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }}
                />
        </Tabs>
    </>
  )
}

export default TabsLayout