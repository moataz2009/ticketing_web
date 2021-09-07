import axios from 'axios'
import React from 'react'


export function LoginAction(data) {

    console.log('action log');
    return dispatch => {
        return axios.post('/login', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('token', token);
        }).catch(e => {
            console.log(e)
        }) 
    }
}
