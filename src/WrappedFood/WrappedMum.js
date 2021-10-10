import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HeaderCompt from './HeaderCompt';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import HomePage from './HomePage';



const WrappedMum = () => {
    return (
      <Router>
          <HomePage/>
          <Switch>
          <Route path='/HeaderCompt' exact component = {HeaderCompt}/>
          <Route path='/Comp1' exact component = {Comp1}/>
          <Route path='/Comp2' exact component = {Comp2}/>
          <Route path='/Comp3' exact component = {Comp3}/>
          </Switch>
      </Router>
    )
}

export default WrappedMum;