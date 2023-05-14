import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrustructure/theme";
import { SafeView } from "./src/utils/safe-area.component";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { Navigation } from "./src/infrustructure/navigation";

const Tab = createBottomTabNavigator();

const SettingScreen = () => {
  return (
    <SafeView>
      <Text>Setting screen</Text>
    </SafeView>
  );
};

const MapScreen = () => {
  return (
    <SafeView>
      <Text>Maps screen</Text>
    </SafeView>
  );
};

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];

  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

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
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </ThemeProvider>
      </PaperProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
