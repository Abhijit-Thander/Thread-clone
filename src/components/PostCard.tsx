import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Post } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const PostCard = ({ post }: { post: Post }) => {
  return (
    <View className=" border-b border-gray-800/60 p-6">
      {/* User Info and Post Header */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image
            source={{ uri: post.user.image }}
            className="w-10 h-10 rounded-full"
          />
          <View className="ml-3 flex-row items-center gap-3">
            <Text className="text-white font-semibold">{post.user.name}</Text>
            <Text className="text-gray-500 text-sm mt-1 ">{dayjs(post.createdAt).fromNow()}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Post Content */}
      <View className="mt-3">
        <Text className="text-white text-base">{post.content}</Text>
      </View>

      {/* Post Stats and Actions */}
      <View className="flex-row gap-6 mt-4">
        <TouchableOpacity className="flex-row items-center">
          <Ionicons name="heart-outline" size={20} color="#d1d5db" />
          <Text className="text-gray-300 ml-2">0</Text>

        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center">
          <Ionicons name="chatbubble-outline" size={20} color="#d1d5db" />
          <Text className="text-gray-300 ml-2">{post.replies.length}</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center">
          <Ionicons name="repeat" size={20} color="#d1d5db" />
          <Text className="text-gray-300 ml-2">0</Text>

        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center">
          <Ionicons name="paper-plane-outline" size={20} color="#d1d5db" />
        </TouchableOpacity>
      </View>

      {/* Post Time */}
    </View>
  );
};

export default PostCard;
