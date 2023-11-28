import "react-native-gesture-handler";

import { StatusBar } from "react-native";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";
import { useFonts } from "expo-font";
import { Splash } from "./src/components/Splash";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold });

  if (fontsLoaded) {
    // return <Loading />;
    return <Splash />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Routes />
    </GestureHandlerRootView>
  );
}
