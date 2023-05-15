import React from "react";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

import { SafeView } from "../../../utils/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeView>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeView>
  );
};
