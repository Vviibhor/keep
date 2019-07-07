import React from 'react'

import './navbar.css'
export default function navbar() {
    return (
        <div>
           <nav className="navbar navbar-light">
            <div className="navbar-brand "><h4>Notes</h4></div>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
           </nav> 
           <hr></hr>
        </div>
    )
}
