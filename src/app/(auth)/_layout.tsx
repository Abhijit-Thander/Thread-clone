
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@/providers/AuthProvider';

const _layout = () => {

  const {isAuthenticated} = useAuth(); 

  if(isAuthenticated){
    return <Redirect href="/(protected)/" />
  }

  return (
    <Stack>
        <Stack.Screen name="login"options={{headerShown:false}}  />
        <Stack.Screen name="signup"options={{title:"Sign Up",headerBackButtonDisplayMode:'generic'}} />
    </Stack>
  )
}

export default _layout