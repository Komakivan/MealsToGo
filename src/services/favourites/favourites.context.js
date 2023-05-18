import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonvalue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonvalue);
    } catch (error) {
      console.log("error storing", error);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  useEffect(() => {
    loadFavourites();
  }, []);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (item) => item.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };
  const value = {
    addToFavourites: add,
    removeFromFavourites: remove,
    favourites,
  };
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};
