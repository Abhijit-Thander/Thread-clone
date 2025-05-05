import { View, Text, TextInput, TouchableOpacity, Pressable , Alert} from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async() => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      setIsLoading(true);
      const{error} = await supabase.auth.signInWithPassword({email,password})
      if(error){
        Alert.alert('Error', error.message)
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold text-center mb-8">Welcome Back</Text>
        
        <View className="gap-4">
          <View>
            <Text className="text-gray-600 mb-2">Email</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3"
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View>
            <Text className="text-gray-600 mb-2">Password</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3"
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity 
            className="bg-black py-3 rounded-lg mt-4"
            onPress={handleLogin}
          >
            <Text className="text-white text-center font-semibold">Login</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-4">
            <Text className="text-gray-600">Don't have an account? </Text>
            <Link href="/signup" asChild>
              <Pressable>
                <Text className="text-black font-semibold">Create one</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
