import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import FirstGame from "./components/first_game";
import StartPage from "./components/start_page";

export default (
        <Route path="/" component={App}>
            <IndexRoute component={StartPage} />
            <Route path="game1" component={FirstGame} />
        </Route>
);
