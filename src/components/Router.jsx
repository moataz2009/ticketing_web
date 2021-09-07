import React from 'react'
import { Route, Switch } from 'react-router'
import Login from '../pages/Login'
import AddTickets from './AddTickets'
import AdminTicketsList from './AdminTicketsList'
import TicketsLists from './TicketsLists'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={TicketsLists} />
            <Route path='/add-ticket' component={AddTickets} />
            <Route path='/admin-ticket' component={AdminTicketsList} />
            <Route path='/login' component={Login} />
        </Switch>
    )
}

export default Router
