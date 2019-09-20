import React, { Component } from 'react';

class PokemonList extends Component {
    constructor(props) {
      super(props);
      this.state = { isBack: false };
    }
    render() {
      let pokemon = this.props.pokemon;
  
      switch (pokemon) {
        case "nidoran-f":
          pokemon = "nidoranf";
          break;
        case "nidoran-m":
          pokemon = "nidoranm";
          break;
        case "deoxys-normal":
          pokemon = "deoxys";
          break;
      }
      const id = this.props.id;
      return (
        <tr>
          <td>
            {id}
          </td>
          <td>
            <img
              className="sprites" alt={id+"image"}
              src={`http://pokestadium.com/sprites/xy/${this.state.isBack
                ? "back/" + pokemon
                : pokemon}.gif`}
            />
          </td>
        </tr>
      );
    }
  }

  export default PokemonList;