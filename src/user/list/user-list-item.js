import React from 'react'

function UserListItem({data, showPlayedGames, onDelete}) {
  return (
    <li key={data.username}>
    	<p>Username: {data.username}</p>
        <p>Number of Games Played: {showPlayedGames ? data.playedGames : '*'}</p>
    </li>
  );
}

export default UserListItem