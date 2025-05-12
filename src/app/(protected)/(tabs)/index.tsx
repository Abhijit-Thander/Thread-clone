import React from "react";
import { FlatList, Text, Alert, ActivityIndicator } from "react-native";
import PostCard from "@/components/PostCard";
import { Link } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const { data } = await supabase
    .from("posts")
    .select("* , user:profiles(*)")
    .throwOnError();
  return data;
};

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (error) {
    Alert.alert("Error fetching posts", error.message);
  }
  return (
    <FlatList data={data} renderItem={({ item }) => <PostCard post={item} />} />
  );
}
