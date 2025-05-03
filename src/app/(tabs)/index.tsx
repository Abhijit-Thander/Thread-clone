import {  dummyPosts } from '@/dummyData';
import { FlatList } from 'react-native';
import PostCard from '@/components/PostCard';

export default function HomeScreen() {
  return (
    <FlatList
      data={dummyPosts}
      renderItem={({ item }) => <PostCard post={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}





