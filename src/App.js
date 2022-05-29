import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    
    this.state = {
      message: 'Hello React'
    }
  }
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => this.setState({message: "Hello Mars"})}>Blast Off 🚀</button>
      </header>
    </div>
  );
}
}

export default App;
