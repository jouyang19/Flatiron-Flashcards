"use client";
import React, { createContext, useState, useEffect } from "react";

const userContext = createContext();

const MyProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve the state from local storage or initialize with a default value.
    // This is to ensure login details persist throughout the app.
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("userState");
      return savedState
        ? JSON.parse(savedState)
        : { isLoggedIn: false, username: "", id: undefined, user: undefined };
    }
    return { isLoggedIn: false, username: "", id: undefined, user: undefined };
  });

  useEffect(() => {
    localStorage.setItem("userState", JSON.stringify(user));
  }, [user]);

  const [isShared, setIsShared] = useState(() => {
    // Retrieve the state from local storage or initialize with a default value.
    // This is to ensure login details persist throughout the app.
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("isShared");
      return savedState ? JSON.parse(savedState) : true;
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem("isShared", JSON.stringify(user));
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser, isShared, setIsShared }}>
      {children}
    </userContext.Provider>
  );
  s;
};

export { userContext, MyProvider };
