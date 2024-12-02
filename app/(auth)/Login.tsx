import { Text, View } from "@/components/Themed";
import React from "react";
import { useRouter } from "expo-router";
import { Button, TextInput } from "react-native";
import { useUserStore } from "@/store/userStrore";

const LoginScreen = () => {
  const router = useRouter();
  const login = useUserStore((state) => state.login);
  const handleLogin = () => {
    login();
    router.replace("/");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          width: "80%",
          marginVertical: 10,
        }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Go to Register"
        onPress={() => router.push("/Registration")}
      />
    </View>
  );
};

export default LoginScreen;
