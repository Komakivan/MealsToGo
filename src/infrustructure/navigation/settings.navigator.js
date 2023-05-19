import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={SettingsScreen}
      />
      <Stack.Screen
        // options={{ headerShown: false }}
        name="Favourites"
        component={FavouritesScreen}
      />
    </Stack.Navigator>
  );
};
