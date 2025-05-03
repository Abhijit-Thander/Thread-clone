import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { useState } from "react";

const New = () => {

  const [post, setPost] = useState('');

  return (
    <View className="p-4 flex-1">
      <Text className="text-white">Username</Text>
      <TextInput
        className=" text-lg p-2 rounded-lg bg-slate-100"
        placeholder="What's on your mind?"
        placeholderTextColor="black"
        multiline={true}
        value={post}
        onChangeText={setPost}
      />

      <View className="mt-10">
        <Pressable
          className="bg-white p-3 rounded-3xl "
          onPress={() => {
            console.log(post);
          }}
        >
          <Text className="text-black text-center text-2xl font-bold">
            Post
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default New;
