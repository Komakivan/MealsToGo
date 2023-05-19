import React, { useState, createContext, useRef } from "react";
import {
  createUserwithEmailandPassword,
  SigninAuthUser,
  // onAuthStateChangedListener,
  signUserOut,
} from "./authentication.service";
import { onAuthStateChanged, getAuth } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const auth = useRef(getAuth()).current;

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsloading(false);
    } else {
      setIsloading(false);
    }
  });

  const onLogin = async (email, password) => {
    try {
      setIsloading(true);
      const authResult = await SigninAuthUser(email, password);
      setUser(authResult);
      setIsAuthenticated(!isAuthenticated);
      setIsloading(false);
    } catch (err) {
      setIsloading(false);
      setError(err.toString());
    }
  };

  const onRegister = async (email, password, repeatedpassword) => {
    try {
      setIsloading(true);
      if (password !== repeatedpassword) {
        setError("passwords do not match");
        setIsloading(false);
        return;
      }
      const { user } = await createUserwithEmailandPassword(email, password);
      setUser(user);
      setIsAuthenticated(!isAuthenticated);
      setIsloading(false);
    } catch (err) {
      setIsloading(false);
      setError(err);
    }
  };

  const onLogout = async () => {
    await signUserOut();
    setUser(null);
    setError(null);
  };

  const value = {
    User,
    isLoading,
    error,
    onLogin,
    isAuthenticated,
    onRegister,
    onLogout,
  };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
