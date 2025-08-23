import { Stack } from "expo-router";
import { useState } from "react";
import "../global.css";

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Stack>
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
      {isAuthenticated && <Stack.Screen name="(tabs)" options={{ headerShown: false }} />}
    </Stack>
  );
}
