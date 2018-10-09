import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Uche', age: 20},
      { name: 'Oge', age: 13},
      { name: 'Fella', age: 24},
      { name: 'Skondo', age: 55}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked'); 
    //DO NOT DO THIS this.state.persons[0].name = "Maximus";
    this.setState({
      persons: [
        { name: 'Uche', age: 20},
        { name: newName, age: 13},
        { name: 'Fella', age: 47},
        { name: 'Skondo', age: 55}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value, age: 20},
        { name: 'Oge', age: 13},
        { name: 'Fella', age: 47},
        { name: 'Skondo', age: 55}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Ogbuagu')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Ogbuu')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>       
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
 