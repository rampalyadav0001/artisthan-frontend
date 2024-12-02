import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <View>
      <Text>This is the login Screen</Text>
      <TouchableOpacity onPress={() => router.navigate("/(tabs)")}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
