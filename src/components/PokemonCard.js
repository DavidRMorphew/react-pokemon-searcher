import React from 'react'
import { render } from 'react-dom'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
    state = {
      frontBack: "front"
    }

    togglePictureUrl = () => {
       this.state.frontBack === "front" ? this.setState({frontBack: 'back'}) : this.setState({frontBack: 'front'})
    }  

    pictureValue = () => {
      return this.state.frontBack === "front" ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
    }

    render(){
      const {pokemon} = this.props
    return (
      <Card onClick={this.togglePictureUrl}>
        <div>
          <div className="image">
            <img src={this.pictureValue()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
    }
}

export default PokemonCard
