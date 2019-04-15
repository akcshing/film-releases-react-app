import React, { Component } from 'react';
import Film from "./Film"


class FilmList extends Component {

  render() {
    const filmNodes = this.props.data.map( film => {
      return <Film url={film.url} key={film.id}>{film.name}</Film>
    })
    return (
      <div>
        <h1>Upcoming Film Releases For UK</h1>
        {filmNodes}
      </div>
    )


  }
}

export default FilmList;
