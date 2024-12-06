import { Link, Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="Login"
        options={{
          title: "Login",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Registration"
        options={{
          title: "Registration",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectInterests"
        options={{
          title: "Interests",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
