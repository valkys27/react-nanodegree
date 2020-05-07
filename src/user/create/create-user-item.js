import React from 'react'

class CreateUserItem extends React.Component {
  
  state = {
    firstName: "",
    lastName: "",
    username: ""
  }

  isAnyInputEmpty() {
    return this.state.firstName === "" || this.state.lastName === "" || this.state.username === "";
  }

  onSubmit = event => {
    const { firstName, lastName, username } = this.state;
    this.props.onAddItem({firstName: firstName, lastName: lastName, username: username, playedGames: 0}, event, this.setValidUsername);
  }

  set(name) {
    return event => {
    	const newState = this.state;
    	newState[name] = event.target.value;
		try {
          event.target.setCustomValidity("");
        } catch (e) {}
    	this.setState(currentState => newState);
  	}
  }

  setValidUsername = (form, newValue) => {
    if (newValue) {
      this.setState({firstName: "", lastName: "", username: ""});
    } else {
      form[2].setCustomValidity("This username is already exist.");
      form.reportValidity();
    }
  }
  
  render() {
    return (
    	<form onSubmit={this.onSubmit}>
        	<input value={this.state.firstName} placeholder="first name" onChange={this.set("firstName")}/>
    		<input value={this.state.lastName} placeholder="last name" onChange={this.set("lastName")}/>
			<input value={this.state.username} placeholder="username" onChange={this.set("username")}/>
			<button disabled={this.isAnyInputEmpty()}>Add</button>
        </form>
  	);
  }
}

export default CreateUserItem