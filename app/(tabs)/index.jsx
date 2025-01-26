// rnfes
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aora!</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
})