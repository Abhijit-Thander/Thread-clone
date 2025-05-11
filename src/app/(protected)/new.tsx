import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";

const NewPostScreen = () => {
  const [text, setText] = useState("");
  const { user } = useAuth();

  const onSubmit = async () => {
    if (!text || !user) {
      console.log("No text or user found:", { text, userId: user?.id });
      return;
    }

    console.log("Submitting post:", { content: text, userId: user.id });
    const { error, data } = await supabase.from("posts").insert({
      content: text,
      user_id: user.id,
    });

    if (error) {
      console.log("Error submitting post:", error);
    } else {
      console.log("Post submitted successfully:", data);
    }

    setText("");
  };

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
          onPress={onSubmit}
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
