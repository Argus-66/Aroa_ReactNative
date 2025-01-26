// rnfes
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function App(){
  return (
    <View className='flex-1 items-center justify-center bg-black-100'>
      <Text className='text-3xl font-psemibold'>Aora!</Text>
      <StatusBar style="auto" />
      <Link 
        href="/home"
        style={{
          color: 'blue',
        }}
      >Go to Home</Link>
    </View>
  )
}

