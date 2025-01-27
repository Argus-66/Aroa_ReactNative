import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image 
        source = {icon}
        resizeMode = "contain"
        tintcolor = {color}
        className = "w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs` }>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon:  ({ color, focused }) =>(
              <TabIcon 
                icon = {icons.home}
                color= {color}
                name = "Home"
                focused = {focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout