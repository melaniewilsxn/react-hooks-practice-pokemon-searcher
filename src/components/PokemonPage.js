import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonList, setPokemonList] = useState([])
  const [searched, setSearched] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(pokemonData => setPokemonList(pokemonData))
  }, [])

  function handleNewPokemon(newPokemon){
    setPokemonList([...pokemonList, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddNewPokemon={handleNewPokemon}/>
      <br />
      <Search searched={searched} setSearched={setSearched}/>
      <br />
      <PokemonCollection pokemonList={pokemonList} searched={searched}/>
    </Container>
  );
}

export default PokemonPage;
