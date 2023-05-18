import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeView } from "../../utils/safe-area.component";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeView>
    <Text>Settings</Text>
  </SafeView>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen
      options={{ headerShown: false }}
      name="Restaurants"
      component={RestaurantsNavigator}
    />
    <Tab.Screen
      options={{ headerShown: false }}
      name="Map"
      component={MapScreen}
    />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);
