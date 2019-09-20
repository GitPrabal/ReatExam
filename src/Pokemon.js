import React , { Component } from 'react';
import PokemonList from './PokemonList';
import Pagination from "react-js-pagination";
import axios from 'axios';


class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      generation: "Generation One",
      activePage: 1,
      pageNumber:10
    };
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }
 
  // componentDidMount() {
  //   fetch("https://pokeapi.co/api/v2/pokemon/?limit=5", {
  //     method: "GET"
  //   }).then(response => {
  //     if (response.ok) {
  //       response.json().then(container => {
  //         this.setState({
  //           pokemon: container.results
  //         });
  //       });
  //     }
  //   });
  // }

  async componentDidMount() {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5');
    this.setState({ pokemon: res.data['results'] })
  }
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100',
    pokemon: null
  };
  render(){
    let { pokemon } = this.state;
    let pokemonList;

    pokemonList = (
      <table className = "table table-bordered">
       <tbody>
       <tr>
        <th>Id</th>
        <th>Image</th>
       </tr>
          {pokemon.map((monster, index) =>
              <PokemonList  key={monster.name} id={index + 1} pokemon={monster.name} data={pokemon}/>
          )}
        </tbody>
        </table>
    );

    return(<div>
            <div className="container">
              {pokemonList}
            </div>
            <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={8}
          totalItemsCount={100}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          />

           </div>
    )
  }
}
export default Pokemon;




