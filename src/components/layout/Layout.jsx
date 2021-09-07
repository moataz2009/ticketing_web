import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TopNav from '../TopNav'
import Router from '../Router'
import Login from '../../pages/Login'


const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <>
                {/* <Login /> */}

                <TopNav />
                <Router />
                </>
            )} />
        </BrowserRouter>
    )
}

export default Layout
