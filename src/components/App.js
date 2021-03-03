import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Artwork from './Artwork';
import SingleArtwork from './SingleArtwork';
import Navbar from './Navbar';
import About from './About';
import Error from './Error';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/artwork'>
          <Artwork />
          <Footer />
        </Route>
        <Route path='/about'>
          <About />
          <Footer />
        </Route>
        <Route path='/singleartwork/:id' children={<SingleArtwork/>}></Route>
        <Route path='*'>
          <Error />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
