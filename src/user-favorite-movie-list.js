import React, { Component } from 'react'
import UserFavoriteMovie from './user-favorite-movie'

class UserFavoriteMovieList extends Component {
  
  findUser(userId) {
    return this.props.users[userId];
  }
  
  findMovie(movieId) {
    return this.props.movies[movieId];
  }
  
  renderUserFavoriteMovieItem(profile) {
    const user = this.findUser(profile.userID);
    const movie = this.findMovie(profile.favoriteMovieID);
    return <UserFavoriteMovie user={user} movie={movie}/>;
  }
  
  render() {
    return (
      <ol>
      	{this.props.profiles.map(profile => this.renderUserFavoriteMovieItem(profile))}
      </ol>
    );
  }
}

export default UserFavoriteMovieList;