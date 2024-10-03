import { View, Text } from 'react-native'
import React, { useState } from 'react'
import FormField from '../../components/FormField'

const Home = () => {
  const [form, setForm] = useState({
    email:"",
    password:""
  })
  return (
    <View>
      <Text>Home</Text>
      <FormField
              title="Name"
              value={form.email}
              placeholder={"Enter your email"}
              handleChangeText={(e)=>setForm({...form, email: e.target.value})}
              otherStyles="w-full mt-7"
            />
    </View>
  )
}

export default Home