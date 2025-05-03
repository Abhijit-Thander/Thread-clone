
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="login"options={{headerShown:false}}  />
        <Stack.Screen name="signup"options={{title:"Sign Up",headerBackButtonDisplayMode:'generic'}} />
    </Stack>
  )
}

export default _layout