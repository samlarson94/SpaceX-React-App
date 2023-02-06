// import logo from './logo.svg';
import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Card } from './components/Card';
import { Modal } from './components/Modal';
import SpaceNews from './components/SpaceNews';
import NavBar from './components/NavBar';
import Home from './components/Home';

//Changing to class-based component so we can utilize State.
class App extends Component {
  constructor () {
    super();
    
    this.state = {
      rockets: [],
      articles: []
    }
  }

  //Life cycle method to mount information from our API Call before rendering
  componentDidMount() {
    fetch('https://api.spacexdata.com/v4/rockets')
      .then((response) => response.json()) //Convert response to JSON 
        //Pull rockets data and assign to empty array 'rockets' state
      .then(rockets => this.setState({rockets: rockets}))

    fetch('https://api.spaceflightnewsapi.net/v3/articles?title_contains=spacex')
      .then((response) => response.json())
      .then(articles => this.setState({articles: articles}))
      .catch(error => console.log(error))

  }

 
  render () {
  return (

    <div className="container">
        {/* <Router>
         
          <Route path="/home" component={Home} />
          <Route path="/space-news" component={SpaceNews} />  
        </Router> */}
      
      <h1 className="main-title chrome">SpaceX Rocket Explorer 🚀</h1>
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
        <div>
          <h1>Space News</h1>
          <div class="article-list-container">
          {this.state.articles.map((article) => (
            <section key={article.id}>
              <h1>{article.title}</h1>
              <p>{article.url}</p>
            </section>
          ))}

          </div>
         
        </div>
         
      </div>
      
      
  );
}
}
export default App;
