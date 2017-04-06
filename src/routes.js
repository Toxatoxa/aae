import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './components/App';

const NoMatch = ({location}) => (
    <div>
        <h3>No match for
            <code>{location.pathname}</code>
        </h3>
    </div>
)

export default(
    <Switch>
        <Route exact path="/" component={App}/>
        <Route component={NoMatch}/>
    </Switch>
);
