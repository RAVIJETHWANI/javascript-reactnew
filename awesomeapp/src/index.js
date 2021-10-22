import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import HackerNewsApp from './HackerNewsApp';
import { AppProvider } from './HackerNewsContext';
import "./HackerNews.css"

//import store from "./Store"
//import {Provider} from "react-redux"
//store.subscribe(()=>console.log(store.getState()))
ReactDOM.render(
<>
<BrowserRouter>
<AppProvider>
  <HackerNewsApp />
</AppProvider>
  
</BrowserRouter>
</>,document.getElementById('root')
  );