"use client";
import Link from "next/link";
import { Card, CardFooter, CardTitle, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

export default function Deck({ deck, handleDelete }) {
  return (
    <>
      <Card className="grid w-[350] items-center gap-4 text-center mx-auto w-full px-4 max-w-2xl mb-4">
        <CardHeader>
          <CardTitle>{deck.name}</CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-center space-x-4">
          <Button>
            <Link href={`/deck/${deck.id}`}>View Deck</Link>
          </Button>
          <Button onClick={() => handleDelete(deck.id)}>Delete</Button>
        </CardFooter>
      </Card>
    </>
  );
}
