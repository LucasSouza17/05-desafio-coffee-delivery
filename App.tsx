import "react-native-gesture-handler";

import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";

import { Routes } from "./src/routes";
import { Splash } from "./src/components/Splash";
import { CartContextProvider } from "./src/context/CartContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold });
  const [splashLoaded, setSplashLoaded] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !splashLoaded) {
    return <Splash onFinished={(isFinished) => setSplashLoaded(isFinished)} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </GestureHandlerRootView>
  );
}
