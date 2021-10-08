import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeaderComp from './HeaderComp';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';
import VideoSection from './VideoSection';
import SumFile from './SumFile';

 const Mother = () => {
    return (
        <Router>
            <SumFile/>
            <Switch>
                <Route path='/HeaderComp' exact component = {HeaderComp}/>
                <Route path='/HeroSection' exact component = {HeroSection}/>
                <Route path='/ServiceSection' exact component = {ServiceSection}/>
                <Route path='/VideoSection' exact component = {VideoSection}/>
                <Route path='/ContactSection' exact component = {ContactSection}/>
                <Route path='/FooterSection' exact component = {FooterSection}/>
            </Switch>
        </Router>
    )
}

export default Mother;