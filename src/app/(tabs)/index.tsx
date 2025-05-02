
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text className='text-red-500 text-5xl'>Feed</Text> 
     <StatusBar style='light' />  
    </View>
  );
}


