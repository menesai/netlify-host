import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import GetReq from './components/GetReq'

export default (
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/data' component={GetReq}/>
        <Route/>
        <Route/>
        <Route/>

    </Switch>
)