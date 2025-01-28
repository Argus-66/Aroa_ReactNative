// rnfes
import 'react-native-url-polyfill/auto'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { Redirect, router } from 'expo-router';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';

import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/home" />

  return (
    <SafeAreaView className="bg-primary h-full" >
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">

          <Image
            source={images.logo}
            className="w-[132px] h-[84px]"
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />

          <View className="relative mt-5">
            <Text className="text-4xl text-white font-bold text-center
            ">
              Discover Endless Possibilities with {''}
              <Text className="text-secondary-200 ">Aora</Text>
            </Text>
            <Image 
            source={images.path}
            className="w-[136px] h-[15px] absolute -bottom-2 -right-9"
            resizeMode='contain'
            />
          </View>
          <Text className=" text-s font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation: embark on a journey of limetless exploration with Aora</Text>

          <CustomButton 
          title="Continue with Email"
          handlePress={() => router.push('/sign-in')}
          containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar //when u wanna darken the top bar where u see battery etc
        backgroundColor='#161622'
        style='light'
      />
    </SafeAreaView>
  )
}

