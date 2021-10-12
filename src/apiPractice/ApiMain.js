import React from 'react'
import MovieFile from './MovieFile';
import ApiSum from './ApiSum';
import HeaderFile from './HeaderFile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const ApiMain = () => {
    return (
        <Router>
            <ApiSum/>
            <Switch>
            <Route path='/HeaderFile' exact component = {HeaderFile}/>
            <Route path='/details/:id' exact component = {MovieFile}/>
            </Switch>
        </Router>
    )
}

export default ApiMain;
