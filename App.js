import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Svg from "react-native-svg";
import RootNavigator from "./src/navigation";
import { useFonts } from "expo-font";

import {
  NunitoSans_300Light,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
} from "@expo-google-fonts/nunito-sans";
import {
  Merriweather_300Light,
  Merriweather_400Regular,
  Merriweather_700Bold,
} from "@expo-google-fonts/merriweather";
import {
  Gelasio_600SemiBold,
  Gelasio_700Bold,
  Gelasio_400Regular,
  Gelasio_500Medium
} from "@expo-google-fonts/gelasio";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_300Light,
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
    Merriweather_300Light,
    Merriweather_400Regular,
    Merriweather_700Bold,
    Gelasio_600SemiBold,
    Gelasio_700Bold,
    Gelasio_400Regular,
    Gelasio_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}
