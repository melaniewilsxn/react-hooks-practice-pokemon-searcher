import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList, searched }) {

  const displayPokemon = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(searched.toLowerCase()))

  return (
    <Card.Group itemsPerRow={6}>
      {displayPokemon.map((pokemon) => (<PokemonCard pokemon={pokemon} key={pokemon.id} />))}
    </Card.Group>
  );
}

export default PokemonCollection;
