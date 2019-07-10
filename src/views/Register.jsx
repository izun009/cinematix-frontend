import React, { Component } from 'react'
import axios from 'axios';

export class Register extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      username : '',
      password : '',
      email : ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(e){
    e.preventDefault();
    var mail = document.getElementById('email').value;
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    const obj = {
      email : mail,
      username: user,
      password : pass
    }
    console.log(obj);
    fetch('http://localhost:5000/api/v1/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    }).then(res => {
      if(res.status <= 400){
        console.log('Success');
        alert('Berhasil Mendaftar');
      }

      window.location.href = 'http://localhost:3000/login'
    }).catch(err => {
      console.log('Error Message : ',err);
    });

  }
 

  render() {
    return (
      <div className="bg-default">
        <div className="main-content">
    {/* <!-- Navbar --> */}
    <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
      <div className="container px-4">
        <h1 style={{color:"white"}}>CINEMATIX</h1>
        <div className="collapse navbar-collapse" id="navbar-collapse-main">       
          {/* <!-- Navbar items --> */}
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a className="nav-link nav-link-icon" href="/">
                <span className="nav-link-inner--text" style={{color:"white"}}>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="/signup">
                <span className="nav-link-inner--text" style={{color:"white"}}>Sign Up</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="/login">
                <span className="nav-link-inner--text">Sign In</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* <!-- Header --> */}
    <div className="header bg-gradient-primary py-7 py-lg-8">
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    {/* <!-- Page content --> */}
    <div className="container mt--8 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="card bg-secondary shadow border-0">
            <div className="card-header bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <h2>Sign Up</h2>
              </div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <form role="form" onSubmit={this.onSubmit}>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <input className="form-control" id="username" placeholder="Username" type="text"/>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <input className="form-control" id="email" placeholder="Email" type="email"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <input className="form-control" id="password" placeholder="Password" type="password"/>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary my-4">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Footer --> */}
  <footer className="py-1">
    <div className="container">
      <div className="row align-items-center justify-content-xl-between">
        <div className="col-xl-6">
          <div className="copyright text-center text-xl-left text-muted">
            &copy; 2019 <a href="https://www.kodekita.net" className="font-weight-bold ml-1" target="_blank">KodeKita
              Tim</a>
          </div>
        </div>
        <div className="col-xl-6">
          <ul className="nav nav-footer justify-content-center justify-content-xl-end">
            <li className="nav-item">
              <a href="https://www.kodekita.net" className="nav-link" target="_blank">KodeKita Tim</a>
            </li>
            <li className="nav-item">
              <a href="https://www.kodekita.net" className="nav-link" target="_blank">About Us</a>
            </li>
            <li className="nav-item">
              <a href="https://www.kodekita.net" className="nav-link" target="_blank">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
      </div>
    )
  }
}

export default Register
