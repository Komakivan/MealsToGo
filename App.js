import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrustructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrustructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <PaperProvider>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <Navigation />
          </AuthenticationContextProvider>
        </ThemeProvider>
      </PaperProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
