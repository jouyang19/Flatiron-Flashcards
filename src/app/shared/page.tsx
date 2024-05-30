"use client";
import { CardTitle } from "./src/components/ui/card";
import SharedDecks from "./src/components/sharedDecks";
import { useEffect } from "react";

export default function Shared() {
  return (
    <>
      <CardTitle className="flex justify-center py-5">Shared</CardTitle>
      <SharedDecks />
    </>
  );
}
