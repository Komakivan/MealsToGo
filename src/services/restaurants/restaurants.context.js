import React, { useState, createContext, useEffect, useContext } from "react";
import { restaurantRequest, restaurantTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsloading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantRequest(loc)
        .then(restaurantTransform)
        .then((response) => {
          setIsloading(false);
          setRestaurants(response);
          console.log(response);
        })
        .catch((err) => {
          setIsloading(false);
          setError(err);
        });
    }, 1000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      console.log(locationString);
      retrieveRestaurants(locationString);
    }
  }, []);

  const values = { restaurants, isLoading, error };

  return (
    <RestaurantsContext.Provider value={values}>
      {children}
    </RestaurantsContext.Provider>
  );
};
