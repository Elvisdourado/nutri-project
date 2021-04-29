import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route } from 'react-router-dom'
import './assets/App.css'

import NavBar from './extras/NavBar'
import About from './extras/About';
import Homepage from './Homepage'
import FullSearch from "./extras/FullSearch";
import Detail from './extras/Detail'


function App() {
  return (
    <div className="App">

      <div>
        <BrowserRouter>
          <NavBar></NavBar>
          <Route exact path='/' component={Homepage} />
          <Route  path='/about' component={About} />
          <Route  path='/fullSearch/' component={FullSearch} />
          <Route path='/detail/:id' component={Detail}/>
        </BrowserRouter>
      </div>

      </div>
  );
}

export default App;
