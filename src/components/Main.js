import React from 'react';
import { Switch, Route } from "react-router-dom";
import Banner from './Banner';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Banner} />
                <Route path="/Banner" component={Banner} />
            </Switch>
        </div>
    )
}

export default Main;