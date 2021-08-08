import React from 'react'
import './App.css'
import Navigation from './Components/Navigation';
import  Trailer from './Components/TrailerMovie';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import TrailerMovie from './Components/TrailerMovie';

function App() {
  

  return (
    
     
     <BrowserRouter>
  <Switch>
    <div>
          <Route exact path="/"  component={Navigation} />
          <Route path="/Trailer/:id" component={TrailerMovie} />

    </div>
        </Switch>
        </BrowserRouter>
        
  );
}

export default App;