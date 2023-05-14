import React from "react";
import { Text, View } from "react-native";
import { SafeView } from "../../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeView>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeView>
  );
};
