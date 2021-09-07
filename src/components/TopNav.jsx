import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Ticketing System</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/">My Tickets</Link>
                        <Link className="nav-link" to="/add-ticket">Add ticket</Link>
                        <Link className="nav-link" to="/admin-ticket">Admin ticket</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNav
