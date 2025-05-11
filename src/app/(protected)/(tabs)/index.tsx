import React, { useEffect, useState } from 'react';
// import { dummyPosts } from '@/dummyData';
import { FlatList, View, Text, Alert } from 'react-native';
import PostCard from '@/components/PostCard';
import { Link } from 'expo-router';
import { Post } from '@/types';
import { supabase } from '@/lib/supabase';

export default function HomeScreen() {

  const [posts, setPosts] = useState<Post[]>([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from('posts').select('* , user:profiles(*)');
      if (error) {
        Alert.alert('Error fetching posts', error.message);
      }
      setPosts(data as Post[]);
    };
    fetchPosts()
  })

  console.log(JSON.stringify(posts, null, 2));
 


  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostCard post={item} />}
      ListHeaderComponent={() => (
        <>
          <Link href="/new" className="text-white text-center text-lg p-4">
            <Text className="text-blue-500 text-center text-3xl font-bold">New Post</Text>
          </Link>

        </>
      )}
    />
  );
}





