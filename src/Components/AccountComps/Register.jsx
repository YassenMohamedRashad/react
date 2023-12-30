import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
      <div className='container p-5 mt-5 mb-5 m-auto' style={ { backgroundColor: "#eee", borderRadius: "25px" } }>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <p id="emailHelp" className="text-black-50 form-text">
              We'll never share your email with anyone else.
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember Me
            </label>
          </div>
          <div><p className='form-text text-black-50'>Already have account? <Link to={ "/Login" } className='text-success'>Login</Link> </p></div>
          <Link to={ "/" } className="btn btn-success w-100">
            Submit
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register