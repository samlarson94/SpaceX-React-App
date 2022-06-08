// import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';
import { Card } from './components/Card';
import { Modal } from './components/Modal';


//Changing to class-based component so we can utilize State.
class App extends Component {
  constructor () {
    super();
    
    this.state = {
      rockets: []
    }
  }

  //Life cycle method to mount information from our API Call before rendering
  componentDidMount() {
    fetch('https://api.spacexdata.com/v4/rockets')
      .then((response) => response.json()) //Convert response to JSON 
        //Pull rockets data and assign to empty array 'rockets' state
      .then(rockets => this.setState({rockets: rockets}))
  }
  render () {
  return (
    <div className="container">
      <h1 className="main-title">SpaceX Rocket Explorer 🚀</h1>
      <div className="row">
      {/* Create map function to loop over rockets array */}
        {this.state.rockets.map((rocket) => (
          <Fragment>
            {/* Create both Card and Modal as separate components - export from components and import into App.js. Wrap components in Fragment. */}
            {/* Defining attribute name of rocket as our prop - 'prop' used when passing into components */}
              <Card rocket={rocket} />
              <Modal rocket={rocket} />
        </Fragment>
          ))}
          </div>
       </div> 
      
  );
}
}

export default App;
