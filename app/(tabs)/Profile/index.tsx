import { Button, StyleSheet, TouchableOpacity } from "react-native";

import React from "react";
import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile page</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity onPress={() => router.navigate("/Login")}>
        <Text style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}>
          + Log Out +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
