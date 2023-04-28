import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrustructure/theme";

export default function App() {
  return (
    <>
      <PaperProvider>
        <ThemeProvider theme={theme}>
          <RestaurantScreen />
        </ThemeProvider>
      </PaperProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
