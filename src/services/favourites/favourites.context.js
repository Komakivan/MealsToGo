import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { User } = useContext(AuthenticationContext);

  const saveFavourites = async (value, uid) => {
    try {
      const jsonvalue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonvalue);
    } catch (error) {
      console.log("error storing", error);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  useEffect(() => {
    if (User && User.uid && favourites.length) {
      saveFavourites(favourites, User.uid);
    }
  }, [favourites, User]);

  useEffect(() => {
    if (User && User.uid) {
      loadFavourites(User.uid);
    }
  }, [User]);

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
