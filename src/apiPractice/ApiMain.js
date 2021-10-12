import React from 'react'
import MovieFile from './MovieFile';
import ApiSum from './ApiSum';
import HeaderFile from './HeaderFile';
import MovieDetail from './MovieDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const ApiMain = () => {
    return (
        <Router>
            <ApiSum/>
            <Switch>
            <Route path='/HeaderFile' exact component = {HeaderFile}/>
            <Route path='/MovieFile' exact component = {MovieFile}/>
            <Route path='/detail:id' exact component = {MovieDetail}/>
            </Switch>
        </Router>
    )
}

export default ApiMain;
