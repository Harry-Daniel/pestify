import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const _layout = () => {
  return (
    <Tabs
    screenOptions={{
      headerTitle:"PESTIFY",

    }}>
        <Tabs.Screen
        name="index"
        options={{
            title:"Home",
            tabBarIcon:({color,size})=><AntDesign name="home" size={size} color={color} />
        }}
        />
        <Tabs.Screen
        name="history"
        options={{
            title:"History",
            tabBarIcon:({color,size})=><FontAwesome name="history" size={size} color={color} /> 
        }}
        
        />
        </Tabs>
  )
}

export default _layout