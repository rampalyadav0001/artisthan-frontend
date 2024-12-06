import { Link, Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="Login"
        options={{
          title: "Login",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Registration"
        options={{
          title: "Registration",
          headerShown: true,
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
