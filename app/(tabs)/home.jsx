import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPosts, getLatestPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'

import { useGlobalContext } from '../../context/GlobalProvider'

const Home = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(getAllPosts)
  const { data: latestPosts} = useAppwrite(getLatestPosts)

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }


  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            video={item}
          />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="flex-row justify-between items-start mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back,
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {user?.username}
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode='contain'
                />

              </View>
            </View>

            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>

              <Trending
                posts={latestPosts ?? [] }
              />

            </View>
          </View>
        )}

        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}
        />
        }
      />
    </SafeAreaView>
  )
}

export default Home

// 1.
// SafeAreaView: 
// This component is used to render content within the safe area boundaries of a device. It ensures that the content is not obscured by hardware elements like the notch or home indicator on modern devices.
// 2.
// FlatList: 
// A performant interface for rendering a list of data. In this component, it is used to display a list of video posts. It includes several important props:
// data: The array of posts to be displayed.
// keyExtractor: A function to extract a unique key for each item.
// renderItem: A function that renders each item in the list using the VideoCard component.
// ListHeaderComponent: A component rendered at the top of the list, which includes a welcome message, a search input, and a list of trending videos.
// ListEmptyComponent: A component displayed when the list is empty, using the EmptyState component.
// refreshControl: A component that provides pull-to-refresh functionality, using the RefreshControl component.
// 3.
// VideoCard: 
// A custom component used to render individual video items within the FlatList.
// 4.
// SearchInput: 
// A custom component for inputting search queries.
// 5.
// Trending: 
// A custom component that displays a list of trending videos, using the latestPosts data.
// 6.
// EmptyState: 
// A custom component that displays a message when there are no videos to show.
// 7.
// useAppwrite: 
// A custom hook used to fetch data from the Appwrite backend. It is used here to fetch all posts and the latest posts.
// 8.
// useGlobalContext: 
// A custom hook that provides access to the global context, including user information and authentication state.