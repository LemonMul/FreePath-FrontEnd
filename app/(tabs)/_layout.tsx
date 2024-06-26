import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { getAuth } from 'firebase/auth';

import { router } from 'expo-router';

export default function _layout() {
  const [isLoading, setIsLoading] = useState(true);

  getAuth().onAuthStateChanged((user) => {
    setIsLoading(false);
    if (!user) {
      router.replace('/welcome');
    }
  });

  if (isLoading) return <Text style={{ paddingTop: 30 }}>Loading...</Text>;

  return (
    <Tabs
      // default route = index
      initialRouteName="index"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: Colors.gray,
      }}
    >
      <Tabs.Screen
        name="compass"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="space-dashboard" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: Colors.primaryColor,
                padding: 10,
                borderRadius: 10,
                height: 50,
              }}
            >
              <Ionicons name="home" size={28} color={Colors.white} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
