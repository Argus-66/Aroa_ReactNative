// rnfes
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function App(){
  return (
    <View >
      <Text >Aora!</Text>
      <StatusBar style="auto" />
      <Link 
        href="/profile"
        style={{
          color: 'blue',
        }}
      >Go to Profile</Link>
    </View>
  )
}

