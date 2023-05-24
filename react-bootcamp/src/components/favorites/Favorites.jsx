import React from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';

export default function Favorites() {
  const myFavorites = useSelector(state => state.myFavorites);

  return (
    <div>
      <h1>My Favorites</h1>
      {myFavorites.map((character, index) => (
        <Card
          key={index}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
        />
      ))}
    </div>
  );
}
