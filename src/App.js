import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import First from './components/First'
import Counter from './components/counter/Counter'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Faisal Ahmed', email: 'faisal.ahmedbcse@gmail.com', address: 'Dhanmondi' },
        { name: 'Faisal Ahmed2', email: 'faisal.ahmedbcse2@gmail.com', address: 'Dhanmondi 2' },
        { name: 'Faisal Ahmed3', email: 'faisal.ahmedbcse3@gmail.com', address: 'Dhanmondi 3' }

      ]
    }
  }


  render() {

    return (
      <div className="App">

        {this.state.persons.map((item, key) =>
          <First name={item.name} email={item.email}
            address={item.address} />
        )}

        {/* <First name={this.state.person[0].name} email={this.state.person[0].email}
          address={this.state.person[0].address} />

        <Counter /> */}
      </div>
    );
  }
}


export default App;
