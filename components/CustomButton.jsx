import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity = {0.7}
        className={`bg-black p-4 rounded-lg w-full items-center justify-center ${containerStyles} ${isLoading? 'opacity-50': ''}`}
        disabled={isLoading}
    >
      <Text className={`text-white font-ralewaySemiBold text-xl ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton