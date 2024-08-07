import { useContext, useEffect, useState } from "react";
import { userContext } from "./UserContext";
import Deck from "./Deck";

export default function UserDecks({ user }) {
  const { setIsShared } = useContext(userContext);

  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/userdecks`)
      .then((response) => response.json())
      .then((decks) => {
        const userDecks = decks.filter((deck) => deck.user === user);
        setDecks(userDecks);
        setIsShared(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/userdecks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => setDecks(decks.filter((deck) => deck.id !== id)));
  };

  console.log("UserDecks deck:", decks);

  return decks.map((deck) => (
    <>
      <Deck
        key={deck.id}
        deck={deck}
        handleDelete={handleDelete}
        isShared={false}
      />
    </>
  ));
}
