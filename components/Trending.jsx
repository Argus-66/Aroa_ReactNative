import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { icons } from '../constants'
//import { Video, ResizeMode } from 'expo-video'
import { Video, ResizeMode } from 'expo-av'


const zoomIn = {
  0: {
    scale: 0.9
  },
  1: {
    scale: 1.1
  }
}
const zoomOut = {
  0: {
    scale: 1
  },
  1: {
    scale: 0.9
  }
}

const TrendingItem = ({ activeItem, item }) => {

  const [play, setPlay] = useState(false)

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play  ? (
        <Video 
          source={{ uri: item.video }}
          className="w-52 h-52 rounded-[35pc] mt-3 bg-white/10"
          resizeMode={ResizeMode.COVER}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            console.log('Playback status: ', status)
            if (status.error) {
              console.error('Playback error: ', status.error);
            }
            if(status.didJustFinish){
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity 
          className="relative justify-center items-center"
          activeOpacity={.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />

          <Image 
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}

    </Animatable.View>
  )
}

const Trending = ({ posts }) => {

  const [activeItem, setActiveItem] = useState(posts[1])

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key)
    }
  }

  return (
    <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
            <TrendingItem 
              activeItem={activeItem} item={item} 
            />
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70,
        }}
        contentOffset={{
          x: 170
        }}
        horizontal
    />
  )
}

export default Trending





// TrendingItem

//  Component:

//  This component represents an individual item in the trending list.
//  It takes two props:
//      activeItem: The currently active item ID (used for animation).
//      item: The data for the current trending item.
//  It uses the useState hook to manage the play state, which controls whether a "Playing" text is displayed or a play button.
//  An Animatable.View component wraps the content, allowing for animation based on the activeItem state.
//      If activeItem matches the item's ID, the zoomIn animation is applied.
//      Otherwise, the zoomOut animation is applied.
//  The animation lasts 500 milliseconds (duration={500}).
//  If play is true, a "Playing" text is displayed.
//  Otherwise, an TouchableOpacity with an ImageBackground (for the item's thumbnail) and an Image (for the play icon) is displayed.

// Trending Component:

//  This component represents the entire trending list.
//  It takes a single prop: posts, which is an array of trending item data.
//  It uses the useState hook to manage the activeItem state, which stores the currently active item ID.
//  The viewableItemsChanged function is called whenever the set of visible items in the FlatList changes. It updates the activeItem to the first visible item's ID.
//  A FlatList component is used to render the list of trending items.
//      The data prop is set to the posts array.
//      The keyExtractor function ensures unique keys for each item.
//      The renderItem function renders each individual TrendingItem component with the appropriate activeItem and item props.
//      The onViewableItemsChanged prop is set to the viewableItemsChanged function to track visibility changes.
//      The viewabilityConfig prop sets a itemVisiblePercentThreshold of 70, which means the activeItem will be updated only when an item is at least 70% visible. This optimizes performance by not continuously updating for minor scrolls.
//      The contentOffset prop is set to {x: 170}, which might be used to pre-scroll the list horizontally by a certain amount (depending on your specific layout).
//      The horizontal prop is set to true to enable horizontal scrolling for the FlatList.