import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import First from './components/First'
import Counter from './components/counter/Counter'
import Books from './components/books/Books'

class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     persons: [
  //       { name: 'Faisal Ahmed', email: 'faisal.ahmedbcse@gmail.com', address: 'Dhanmondi' },
  //       { name: 'Faisal Ahmed2', email: 'faisal.ahmedbcse2@gmail.com', address: 'Dhanmondi 2' },
  //       { name: 'Faisal Ahmed3', email: 'faisal.ahmedbcse3@gmail.com', address: 'Dhanmondi 3' }

  //     ]
  //   }
  // }

  state = {

    name: '',

    persons: [
      { name: 'Faisal Ahmed', email: 'faisal.ahmedbcse@gmail.com', address: 'Dhanmondi' },
      { name: 'Faisal Ahmed2', email: 'faisal.ahmedbcse2@gmail.com', address: 'Dhanmondi 2' },
      { name: 'Faisal Ahmed3', email: 'faisal.ahmedbcse3@gmail.com', address: 'Dhanmondi 3' }

    ],
    books: [
      {
        id: 1,
        name: 'JavaScript',
        price: 20,

      },
      {
        id: 2,
        name: 'React JS',
        price: 30,

      },
      {
        id: 3,
        name: 'Node JS',
        price: 35,

      },
      {
        id: 4,
        name: 'React Native',
        price: 40,

      },
    ]
  }



  clickHandler = (event) => {
    console.log(event.target);
  }

  inputHandler = (event) => {
    //console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  }

  deleteHandler = (id) => {
    let newBooks = this.state.books.filter(book => book.id != id)
    this.setState({
      books: newBooks
    })
  }

  render() {

    return (
      <div className="App">

        {/* {this.state.persons.map((item, key) =>
          <First name={item.name} email={item.email}
            address={item.address} />
        )} */}
        {/* <div className="container my-3">

          <input onChange={this.inputHandler} type="text" placeholder="Enter Your Name" />

          <button className="btn btn-primary" onClick={this.clickHandler}>
            Click Me
        </button>
          {this.state.name ? <p>Hello .. {this.state.name}</p> : ''}
        </div > */}

        <Books deleteHandler={this.deleteHandler.bind(this)} books={this.state.books} />


      </div >
    );
  }
}


export default App;
