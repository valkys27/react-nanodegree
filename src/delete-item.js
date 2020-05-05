import React from 'react'

function DeleteItem({onClick, isDisabled}) {
  return (
    <button onClick={onClick} disabled={isDisabled()}>
      Delete Last Item
	</button>
  );
}

export default DeleteItem