import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log('Login attempt with:', { email, password });
  };

  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold text-center mb-8">Create an account</Text>
        
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
            <Text className="text-white text-center font-semibold">Signup</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-4">
            <Text className="text-gray-600">Already have an account? </Text>
            <Link href="/login" asChild>
              <Pressable>
                <Text className="text-black font-semibold">Sign In</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
