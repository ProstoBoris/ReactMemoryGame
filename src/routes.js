import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Game from "./components/game";
import StartPage from "./components/start_page";

export default (
        <Route path="/" component={App}>
            <IndexRoute component={StartPage} />
            <Route path="game1" component={Game} />
            <Route path="game2" component={Game} />
        </Route>
);
