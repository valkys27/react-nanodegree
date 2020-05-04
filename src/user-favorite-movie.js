import React, { Component } from 'react'

class UserFavoriteMovie extends Component {
  
  render() {
    console.log(this.props);
    return (
      <li key={this.props.user.id}>
		<p>{`${this.props.user.name}'s favorite movie is ${this.props.movie.name}.`}</p>
	  </li>
    );
  }
}

export default UserFavoriteMovie