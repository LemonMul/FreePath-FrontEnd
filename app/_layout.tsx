import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Button, Text, View } from 'react-native';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'Login',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return isLoggedIn ? (
    <RootLayoutNav />
  ) : (
    <LoginScreen onLogin={() => setIsLoggedIn(true)} />
  );
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

interface LoginScreenProps {
  onLogin: () => void;
}

function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Please log in</Text>
      <Button title="Log in" onPress={onLogin} />
    </View>
  );
}
