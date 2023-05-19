import React, { useContext } from "react";
import { SafeView } from "../../../utils/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Text } from "../../../components/typography/typography.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const NoFavouritesView = styled(SafeView)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeView>
      <FavouritesList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeView>
  ) : (
    <NoFavouritesView>
      <Text>No favourites yet</Text>
    </NoFavouritesView>
  );
};
