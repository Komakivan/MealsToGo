import React, { createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

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
