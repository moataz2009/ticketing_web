import React from 'react'
import { Route, Switch } from 'react-router'
import Login from '../pages/Login'
import AddTickets from './AddTickets'
import AdminTicketsList from './AdminTicketsList'
import ProtectedRoute from './ProtectedRoute'
import TicketsLists from './TicketsLists'

const Router = () => {
    return (
        <Switch>
            <Route path='/login' component={Login} />

            <ProtectedRoute exact path='/' component={TicketsLists} />
            <ProtectedRoute exact path='/admin-ticket' component={AdminTicketsList} />
            <ProtectedRoute exact path='/add-ticket' component={AddTickets} />
            <Route path="*" component={() => "404 NOT FOUND"} />

        </Switch>
    )
}

export default Router
