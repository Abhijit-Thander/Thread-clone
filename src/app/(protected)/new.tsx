import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React from "react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";



const createPost = async (content: string, user_id: string) => {
  const {  data } = await supabase
    .from("posts")
    .insert({content, user_id})
    .select()
    .throwOnError();

  return data;
};

 
const NewPostScreen = () => {
  const [text, setText] = useState("");
  const { user } = useAuth();
  const queryClient = useQueryClient()
  

 const {mutate,isPending} = useMutation({
    mutationFn: async () => createPost(text, user!.id ),
    onSuccess:()=>{
      setText("")
      router.back()
      queryClient.invalidateQueries({queryKey:["posts"]})
    },
    onError:(error)=>{
      Alert.alert("Error", error.message)
    }

  })

  return (
    <View className="p-4 flex-1">
      <Text className="text-white">Username</Text>
      <TextInput
        className=" text-lg p-2 rounded-lg bg-slate-100"
        placeholder="What's on your mind?"
        placeholderTextColor="black"
        multiline={true}
        value={text}
        onChangeText={setText}
      />

      <View className="mt-10">
        <Pressable
          className="bg-white p-3 rounded-3xl "
          onPress={() => mutate()}
          disabled={isPending}
        >
          <Text className="text-black text-center text-2xl font-bold">
            Post
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewPostScreen;
