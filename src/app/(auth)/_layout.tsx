import React from 'react'
import { Redirect, Stack, usePathname } from 'expo-router'
import { useAuth } from '@/providers/AuthProvider';

const _layout = () => {
  const {isAuthenticated} = useAuth();
  const pathname = usePathname();

  if(isAuthenticated){
    return <Redirect href="/(protected)/" />
  }

  // If user is on login page, don't allow navigation to signup
  if (pathname === '/login') {
    return (
      <Stack>
        <Stack.Screen name="login" options={{headerShown:false}} />
      </Stack>
    );
  }

  // If user is on signup page, don't allow navigation to login
  if (pathname === '/signup') {
    return (
      <Stack>
        <Stack.Screen name="signup" options={{title:"Sign Up",headerBackButtonDisplayMode:'generic'}} />
      </Stack>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="login"  />
      <Stack.Screen name="signup" options={{title:"Sign Up",headerBackButtonDisplayMode:'generic'}} />
    </Stack>
  );
}

export default _layout