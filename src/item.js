import React from 'react'
import './App.css';

function Item({index,item}) {
  return (
    <li key={index}>{item}</li>
  );
}

export default Item