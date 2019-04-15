import React, { Component, Fragment } from 'react';
import FilmList from "../components/FilmList"
import MoreFilms from "../components/MoreFilms"

class FilmBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Avengers: Endgame",
          url: "https://www.imdb.com/title/tt4154796/?ref_=rlm"
        },
        {
          id: 2,
          name: "Tolkien",
          url: "https://www.imdb.com/title/tt3361792/?ref_=rlm"
        },
        {
          id: 3,
          name: "A Dog's Journey",
          url: "https://www.imdb.com/title/tt8385474/?ref_=rlm"
        },
        {
          id: 4,
          name: "Pokémon Detective Pikachu",
          url: "https://www.imdb.com/title/tt5884052/?ref_=rlm"
        },
        {
          id: 5,
          name: "Aladdin",
          url: "https://www.imdb.com/title/tt6139732/?ref_=rlm"
        }
      ]
    }
  }
  render() {
    return (
      <Fragment>
      <FilmList data = {this.state.data}/>
      <MoreFilms />
      </Fragment>
    )

  }
}

export default FilmBox;
