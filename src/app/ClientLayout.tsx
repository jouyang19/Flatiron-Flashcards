"use client";
import React from "react";
import { MyProvider } from "./src/components/UserContext";

export const ClientLayout = ({ children }) => {
  return <MyProvider>{children}</MyProvider>;
};
