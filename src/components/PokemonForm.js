import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddNewPokemon }) {
  
  const [formData, setFormData] = useState({
    "name": "",
    "hp": 0,
    "sprites": {
      "front": "",
      "back": ""
    }
  })

  function handleChange(e){
    if(e.target.name === "frontURL"){
      setFormData({
        ...formData,
        sprites: {
          ...formData.sprites,
          front: e.target.value
        }
      })
    } else if(e.target.name === "backURL"){
      setFormData({
        ...formData,
        sprites: {
          ...formData.sprites,
          back: e.target.value
        }
      })
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    const pokemonData = {
      "name": formData.name,
      "hp": formData.hp,
      "sprites": {
        "front": formData.sprites.front,
        "back": formData.sprites.back
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(pokemonData)
    })
    .then(res => res.json())
    .then(newPokemon => onAddNewPokemon(newPokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontURL"
            value={formData.sprites.front} 
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backURL"
            value={formData.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
