import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import CreateExpensePage from '../components/CreateExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpensesDashboardPage from '../components/ExpensesDashboardPage'
import Header from '../components/Header'
import HelpExpensePage from '../components/HelpExpensepage'
import NotFoundPage from '../components/Notfound'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={ExpensesDashboardPage} exact={true}/>
                <Route path='/create' component={CreateExpensePage}/>
                <Route path='/edit/:id' component={EditExpensePage}/>
                <Route path='/help' component={HelpExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
