import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const HeaderList = () => {
  return (
    <View className="flex-row items-center justify-between px-4 py-2 border-b border-gray-800/60">
      <Text className="text-white text-xl font-bold">Threads</Text>
      <TouchableOpacity>
        <Feather name="settings" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderList; 