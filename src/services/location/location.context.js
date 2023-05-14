import React, { useEffect, useState, createContext } from "react";
import { locationRequest, locationTransform } from "./location.services";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsloading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      // Do nothing
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsloading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsloading(false);
        setError(err);
      });
  }, [keyword]);

  const values = { location, isLoading, error, search: onSearch, keyword };
  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};
