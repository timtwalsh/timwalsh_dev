import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/resume' component={Resume}></Route>
        </Switch>
    );
}

export default Main;