import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';


class Card extends Component {
  render() {
    const style = {
      margin: 20,
      padding: 20,
      color: 'white',
      backgroundColor: this.props.color,
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Customers />
        <div>
          <input type={'text'} defaultValue={'Type here!'} />
          <select>
            <option>A</option>
            <option>B</option>
          </select>
          <img alt='h1' src={'//unsplash.it/200/300'} />
        </div>

        <div>
          <Card color={'skyblue'}>Card 1</Card>
          <Card color={'steelblue'}>Card 2</Card>
        </div>
      </div>


    );
  }
}

export default App;
