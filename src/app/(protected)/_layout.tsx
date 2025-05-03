import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ProtectedLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown:false}} />
      <Stack.Screen name="new"  options={{ title:"New Threads", animation:"slide_from_bottom"}}/>
    </Stack>
  )
}

export default ProtectedLayout