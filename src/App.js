// import logo from './logo.svg';
import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Card } from './components/Card';
import { Modal } from './components/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

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

  // Currently only pulling articles that pertain to SpaceX for News Section
    fetch('https://api.spaceflightnewsapi.net/v4/articles?title_contains_one=spacex')
      .then((response) => response.json())
      .then(articles => this.setState({articles: articles}))
      .catch(error => console.log(error))
  }


  render () {
    const { articles } = this.state
    const results = articles?.results || []
    const articleCount = articles?.count || 0;
    console.log("arts")
    console.log(articles)
    console.log(results)
    console.log(articleCount)
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
           <Fragment key={rocket.id}>
            <Card rocket={rocket} />
            <Modal rocket={rocket} />
         </Fragment>
          ))}
          </div>
        <div>
          <h1 id="space-news">SpaceX News</h1>
          <div class="article-list-container">

          {results.map((article) => {
          const { id, title, url, image_url, news_site, summary, published_at } = article;

          return (
            <div className="article-wrapper" key={id}> {/* Use `key={id}` */}
              <h3>{title}</h3>
              <h5>Source: {news_site}</h5>
              <img src={image_url} alt={title} style={{maxHeight: '400px', borderRadius: '20px'}} />
              <p>{summary}</p>
              <p>Published: {new Date(published_at).toLocaleString()}</p>
              <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Go to Article
              </a>
            </div>
          );
        })}

          </div>
         
        </div>
        
      </div> 
      
      
  );
}
}
export default App;
