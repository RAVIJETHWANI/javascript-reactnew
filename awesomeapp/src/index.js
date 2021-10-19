import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import MovieApp from './MovieApp';
import { AppProvider } from './MovieContext';
import "./Movie.css"

//import store from "./Store"
//import {Provider} from "react-redux"
//store.subscribe(()=>console.log(store.getState()))
ReactDOM.render(
<>
<BrowserRouter>
<AppProvider>
  <MovieApp />
</AppProvider>
  
</BrowserRouter>
</>,document.getElementById('root')
  );