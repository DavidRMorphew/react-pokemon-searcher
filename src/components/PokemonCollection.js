import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = props => {
  const {pokemon} = props

  const renderPokemonCards = () => {
    if (pokemon.length > 0) { 
      return pokemon.map(pokemonObj => <PokemonCard key={pokemonObj.id} pokemon={pokemonObj}/>)
    }
  }

  
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {renderPokemonCards()}
      </Card.Group>
    )

}

export default PokemonCollection
