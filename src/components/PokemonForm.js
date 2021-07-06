import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (Object.values(this.state).every(value => value !== '')) {
      this.addPokemon(this.state)
    }
  }
  
  addPokemon = (newPokemon) => {
    const url = "http://localhost:3000/pokemon"
    const formattedData = {
      id: "1",
      name: newPokemon.name,
      hp: parseInt(newPokemon.hp),
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      }
    }
    const configObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
      },
      body: JSON.stringify(formattedData)
    }
    fetch(url, configObj)
    .then(resp => resp.json())
    .then(data => {
      this.props.addPokemonToFrontend(data)
    })  
  } 

  

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png
  
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
