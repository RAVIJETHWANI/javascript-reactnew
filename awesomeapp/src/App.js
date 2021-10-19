import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Heading from './Heading'
//import Orderlist from './Orderlist'
//import Profile from "./Profile"
import {add,sub,div} from "./Profile"
function App() {
  return(
    <ul>
    <li>sum of two no. is {add(40,4)}</li>
    <li>sub of two no. is{sub(40,4)}</li>
    <li>division of two no. is {div(40,4)}</li>
  </ul>
   );
}

export default App;



