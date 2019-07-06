import React, { Component } from "react";
import styled from "styled-components";
import pokeball from './pokeball.gif'

const Sprite = styled.img`
  width: Sem;
  height: Sem;
`;
export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: ""
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({
      name,
      imageUrl,
      pokemonIndex
    });
  }
  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <h5 className="card-header"> {this.state.pokemonIndex} </h5>
          {/*
            This not working, Loading image is not showing 
            fix it later 
           */}
          {this.state.imageLoading ? (
            <img
              src={pokeball} 
              style={{width: '5em', height: '5em'}}
              className="card-img-top rounded mx-auto d-block mt-2"
            />
          ): null }
          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            onLoad={() =>
              this.setState({
                imageLoading: false
              })
            }
            onError={() =>
              this.setState({
                toManyRequest: true
              })
            }
            src={this.state.imageUrl}
            style={
              this.state.toManyRequest ? { display: "none" } :
              this.state.imageLoading ? null : { display: "block" }
            }
          />          
          {this.state.toManyRequest ? (<h6>
            <span className="badge badge-danger mt-2">To many Request</span>
          </h6>) : null}
          <div className="card-body mx-auto">
            <h6 className="card-title capitalize "> {this.state.name} </h6>{" "}
          </div>
        </div>
      </div>
    );
  }
}
