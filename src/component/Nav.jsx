import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-primary navbar-dark mb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li>
                        <Link to="/posts" className="nav-link">Post</Link>
                        </li>
                        <li>
                        <Link to="/todos" className="nav-link">Todos</Link>
                        </li>
                        <li>
                        <Link to="/products" className="nav-link">Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      
    </div>
  )
}

export default Nav
