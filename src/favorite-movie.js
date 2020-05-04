import React, {Component} from 'react'
import UserList from './user-list'

class FavoriteMovie extends Component {
  
  render() {
    const {movie,users} = this.props;
    return (
    	<div>
         	<h2>{movie.name}</h2>
    		{this.props.users ? <UserList users={users}/> : <p>None of the current users liked this movie</p>}
         </div>
    );
  }
}

export default FavoriteMovie