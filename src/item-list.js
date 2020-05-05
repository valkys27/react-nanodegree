import React from 'react'
import './App.css';
import Item from './item.js'

function ItemList({items}) {
  return (
    <ol className="item-list">
    	{items.map((item, index) => <Item index={index} item={item}/>)}
  	</ol>
  );
}

export default ItemList