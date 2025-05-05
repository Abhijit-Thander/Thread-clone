import { View, Text } from 'react-native'
import React from 'react'
import { supabase } from '@/lib/supabase';

const ProfileScreen = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-bold text-red-500' onPress={()=>{
        supabase.auth.signOut();
      }}>Logout</Text>
    </View>
  )
}

export default ProfileScreen