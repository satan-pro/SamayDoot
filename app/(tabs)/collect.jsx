import { ScrollView, View, Text } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import PackageCard from '../../components/PackageCard'

const Collect = () => {
  return (
    <SafeAreaView className="bg-primary h-full flex-1 p-4">
      <ScrollView>
          <PackageCard 
            packageId={"123456"}
            packageStatus={"In Transit"}
          />
          <PackageCard 
            packageId={"123456"}
            packageStatus={"New"}
          />
      </ScrollView>

      <StatusBar style="dark" />
    </SafeAreaView>
  )
}

export default Collect