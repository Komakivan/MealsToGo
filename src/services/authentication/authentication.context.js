import React, { useState, createContext, useEffect } from "react";
import {
  CreateUserwithEmailandPassword,
  SigninAuthUser,
  onAuthStateChangedListener,
  signUserOut,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = async (email, password) => {
    try {
      setIsloading(true);
      const authResult = await SigninAuthUser(email, password);
      setUser(authResult);
      setIsloading(false);
      setIsAuthenticated(!isAuthenticated);
    } catch (err) {
      setIsloading(false);
      setError(err.toString());
    }
  };

  const onRegister = async (email, password, repeatPassword) => {
    setIsloading(true);
    try {
      // if (password !== repeatPassword) {
      //   setError("Passwords don't match");
      //   setIsloading(false);
      //   return;
      // }
      const authUser = await CreateUserwithEmailandPassword(email, password);
      setUser(authUser);
      setIsloading(false);
      setIsAuthenticated(!isAuthenticated);
    } catch (err) {
      setIsloading(false);
      setError(err);
    }
  };

  const onLogOut = async () => {
    await signUserOut();
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((usr) => {
      if (usr) {
        setUser(usr);
        setIsAuthenticated(!isAuthenticated);
      }
    });

    return unsubscribe;
  }, [isAuthenticated]);

  const value = {
    user,
    isLoading,
    error,
    onLogin,
    isAuthenticated,
    onRegister,
    onLogOut,
  };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
