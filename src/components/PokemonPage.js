import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    pokemon: [],
    filterTerm: ''
  }

  filterSearch = () => {
      const filteredPokemon = this.state.pokemon.filter(p => p.name.includes(this.state.filterTerm))
      return filteredPokemon
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    this.filterSearch()
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search filterTerm={this.filterTerm} onChange={this.onChange} value={this.state.filterTerm}/>
        <br />
        <PokemonCollection pokemon={this.filterSearch()}/>
      </Container>
    )
  }

  componentDidMount(){
    const url = "http://localhost:3000/pokemon"
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
    })

  }
}

export default PokemonPage
