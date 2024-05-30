"use client";
import React, { FC, ReactNode } from "react";
import { MyProvider } from "@/components/UserContext";

interface ClientLayoutProps {
  children: ReactNode;
}

export const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  return <MyProvider>{children}</MyProvider>;
};
