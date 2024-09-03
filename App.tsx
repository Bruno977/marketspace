import { StatusBar } from "expo-status-bar";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import {
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from "@expo-google-fonts/karla";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Text } from "./components/ui/text";
import { Routes } from "./src/routes";

export default function App() {
  const [loaded, error] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <GluestackUIProvider mode="light">
      <StatusBar backgroundColor="transparent" translucent />

      <Routes />
    </GluestackUIProvider>
  );
}
