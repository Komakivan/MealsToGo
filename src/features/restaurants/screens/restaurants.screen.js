import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeView } from "../../../utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favouritesBar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FadeInView } from "../../../components/animations/fade.animation";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeView>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading ? (
        <ActivityIndicator
          style={{ position: "absolute", top: "50%", left: "43%" }}
          animating={true}
          size={50}
          color={MD2Colors.blue300}
        />
      ) : (
        <RestaurantList
          data={restaurants}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeView>
  );
};
