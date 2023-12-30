import React from 'react';
import { Link } from 'react-router-dom';

function Navbar ()
{
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" >
          <span className='fw-bolder'>Easy<span className='text-success'>Mart</span></span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to={"/"}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="page"  to={ "/Services" }>
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="page"  to={ "/Contact" }>
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="page"  to={ "/AboutUs" }>
                About us
              </Link>
            </li>

          </ul>

          <div>
            <Link to={ "/Cart" } className='text-success btn btn-outline-success m-2'><i className="fa-solid fa-cart-shopping"></i></Link>
            <Link to={ "/UserInfo" } className='text-success btn btn-outline-success m-2'><i className="fa-solid fa-user"></i></Link>
          </div>
        
        </div>
      </div>
    </nav>

  );
}

export default Navbar;