import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            title: 'Cart',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ShipmentTrackingScreen'
          options={{
            title: 'ShipmentTrackingScreen',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='CheckoutPage'
          options={{
            title: 'CheckoutPage',
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
