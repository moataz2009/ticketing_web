import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TopNav from '../TopNav'
import Router from '../Router'
import Login from '../../pages/Login'


const Layout = () => {


    const GetLocalToken = localStorage.getItem('token');
    if(GetLocalToken === null || GetLocalToken === ''){
        return (
            <Login />
        );
    }


    return (
        <BrowserRouter>
            <Route render={(props) => (
                <>
             
                
                <TopNav />
                <Router />
                </>
            )} />
        </BrowserRouter>
    )
}

export default Layout
