import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      width: 70, // Fixed width to prevent text wrapping
      paddingVertical: 5,
    }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 24, // Fixed size for icons
          height: 24,
          tintColor: color, // Correct usage of tintColor
        }}
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'}`}
        style={{
          color: color,
          flexShrink: 0,
          textAlign: 'center',
          fontSize: 12,
        }}
      >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            height: 84,
            paddingTop: 24,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Bookark"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
      <StatusBar
        backgroundColor="#161622"
        style="light"
      />
    </>
  )
}

export default TabsLayout