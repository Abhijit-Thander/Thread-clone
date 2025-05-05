import React from 'react';
import {  dummyPosts } from '@/dummyData';
import { FlatList, View, Text } from 'react-native';
import PostCard from '@/components/PostCard';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <FlatList
      data={dummyPosts}
      renderItem={({ item }) => <PostCard post={item} />}
      // keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <>
        <Link href="/new" className="text-white text-center text-lg p-4">
          <Text className="text-blue-500 text-center text-3xl font-bold">New Post</Text>
        </Link>
         {/* <Link href="/login" className="text-white text-center text-lg p-4">
         <Text className="text-blue-500 text-center text-3xl font-bold">Login</Text>
       </Link> */}
       </>
      )}
    />
  );
}





