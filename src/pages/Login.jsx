import axios from 'axios';
import React, { useState } from 'react'
import { Redirect } from 'react-router';
import { Route } from 'workbox-routing';
import { LoginAction } from '../actions/Actions';
import Auth from '../components/Auth';


const Login = props => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const GetLocalToken = localStorage.getItem('token');
    if(GetLocalToken != null && GetLocalToken != ''){
        return (
            <Redirect to='/' />
        );
    }

    const _loginAction = (e) => {
        e.preventDefault();

        const data = {
            username: username,
            password: password
        }
        console.log(data);
        
        axios.post('/login', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('token', token);
            
            Auth.login(() => {
                props.history.push("/");
            });

        }).catch(e => {
            console.log(e)
        }) 
    

    }

    return (
        <div className='container mt-5'>
            <h1 className="text-center">Login</h1>
            <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 ">
                <form onSubmit={_loginAction}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" />
                    </div>
                    <div className="d-grid">
                        <button className='btn btn-primary fluid'>Login</button>
                    </div>
                </form>
            </div>
            <div className="col-md-3"></div>
            </div>

        </div>
    )
}

export default Login
