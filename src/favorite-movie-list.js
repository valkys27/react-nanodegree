import React, {Component} from 'react'
import FavoriteMovie from './favorite-movie'

class FavoriteMovieList extends Component {
  
  renderMovie(movieId) {
    return <FavoriteMovie key={movieId} movie={this.props.movies[movieId]} users={this.props.usersByMovie[movieId]}/>;
  }
  
  render() {
  	return (
      <ol>
      	{Object.keys(this.props.movies).map(movieId => this.renderMovie(movieId))}
      </ol>
    );
  }
}

export default FavoriteMovieList