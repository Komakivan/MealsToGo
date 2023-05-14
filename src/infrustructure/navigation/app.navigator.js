import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeView } from "../../utils/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantNavigator } from "./restaurants.navigator";

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

export const AppNavigator = () => {
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      // tabBarOptions={{
      //   ActiveTintColor: "tomato",
      //   InactiveTintColor: "gray",
      // }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  </NavigationContainer>;
};
