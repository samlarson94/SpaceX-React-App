// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

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
      <div className="row">
      {/* Create div to display rocket information */}
      {/* Create map function to loop over rockets array */}
      {/* Import bootstrap components (add JS/CSS CDN scripts to HTML) and translate HTML tags to JSX/React */}
        {this.state.rockets.map((rocket) => (
        <div className="card" key={rocket.id} className="rocket-data">
          <img src={rocket.flickr_images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{rocket.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">View More</a>
            </div>
        </div>
          ))}
          </div>
       </div> 
  );
}
}

export default App;
