import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='Auth'
        options={{
          title: 'Auth',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Login'
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Registration'
        options={{
          title: 'Registration',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
