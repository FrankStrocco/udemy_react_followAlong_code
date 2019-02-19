import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'akdk3', name: 'Max', age: 22 },
      { id: 'dkdd4', name: 'Manu', age: 55 },
      { id: 'jjin4', name: 'Stephanie', age: 26 }

    ],
    showPersons: true

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    const person = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
        backgroundColor: 'lightgreen',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return (
                        <Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    );
                })}

            </div>
        );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is totally working!!</p>
        <button
            style={style}
            onClick={this.togglePersonsHandler} >Toggle Persons


        </button>
        {persons}

      </div> // end main div
    );
  }
}

export default App;
