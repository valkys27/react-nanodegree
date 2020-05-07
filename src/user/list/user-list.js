import React from 'react';
import UserListItem from './user-list-item';

class UserList extends React.Component {
  
  state = {
    showPlayedGames: false
  }

  toggleShowPlayedGames = event => {
    this.setState(current => ({showPlayedGames: !current.showPlayedGames}))
  }
  
  render() {
    return (
    	<div>
         	<ol>
              {this.props.users.map(user => <UserListItem data={user} showPlayedGames={this.state.showPlayedGames}/>)}
           	</ol>
  			<div>
				<input type="button" onClick={this.toggleShowPlayedGames} value={`${this.state.showPlayedGames ? "Hide" : "Show"} the Number of Games Played`}/>
			</div>
         </div>
    );
  }
}

export default UserList