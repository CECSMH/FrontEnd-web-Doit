import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home/index';
import SyncPage from '../views/SyncPage/index';
import TaskPage from '../views/TaskPage/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/task" exact component={TaskPage} />
                <Route path="/task/:id" exact component={TaskPage} />
                <Route path="/sync" exact component={SyncPage}/>
            </Switch>
        </BrowserRouter>
    )
}