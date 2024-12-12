import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Redirect, Tabs, useSegments } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

import { useUserStore } from '@/store/userStore';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const hasFinishOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );
  const segment = useSegments();
  const page = segment[segment.length - 1];
  const pagesToHideTabBar = ['ScanNFind'];
  // const hasFinishOnboarding = false;
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  if (!isLoggedIn) {
    if (!hasFinishOnboarding) {
      return <Redirect href='/onboarding' />;
    } else {
      return <Redirect href='/(auth)/Auth' />;
    }
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
        tabBarStyle: {
          display: pagesToHideTabBar.includes(page) ? 'none' : 'flex',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='Search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='search1' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='Cart'
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='shoppingcart' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='Profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
