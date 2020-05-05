import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateNewItem from './create-new-item.js'
import ItemList from './item-list.js'
import DeleteItem from './delete-item.js'

class App extends React.Component {
  state = {
    items: [],
  };

  addItem = value => {
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateNewItem onSubmit={this.addItem}/>
		<DeleteItem onClick={this.deleteLastItem} isDisabled={this.noItemsFound}/>

        <p className="items">Items</p>
        <ItemList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
