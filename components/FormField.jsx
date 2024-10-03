import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text>{title}</Text>
      <View className="h-16 w-full px-4 rounded-lg border-2 border-black items-center">
        <TextInput 
            className="flex-1 font-ralewayRegular text-base h-full w-full"
            value={value}
            placeholder={placeholder}
            onChange={handleChangeText}
            secureTextEntry={title==="Password" && !showPassword}
        />
      </View>
    </View>
  )
}

export default FormField