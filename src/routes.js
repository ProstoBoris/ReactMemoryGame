import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import FirstGame from "./components/first_game";

export default (
        <Route path="/" component={App}>
            <Route path="game1" component={FirstGame} />
        </Route>
);