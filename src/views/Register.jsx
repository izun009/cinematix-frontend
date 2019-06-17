import React, { Component } from 'react'
import axios from 'axios';

export class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }


  handleSubmit = event => {
    event.preventDefault();
    const apiku = 'http://localhost:4000/api/v1/register';
    const self = this;
    const payload = {
      'username' : this.state.username,
      'email' : this.state.email,
      'password' : this.state.password
    }
    axios.post(apiku, payload)
    .then((res) => {
      console.log(res);
      if(res.data.code == 200){
        console.log('Success Registration');
      }
      alert('Success');
      window.location.href = 'localhost:3000';
    }).catch((err) => {
      console.log(err);
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
              <a className="nav-link nav-link-icon" href="/signup">
                <span className="nav-link-inner--text" style={{color:"white"}}>Sign Up</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="/login">
                <span className="nav-link-inner--text">Login</span>
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
              <form role="form">
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <input className="form-control" name="username"
                    onChange={(event,newValue)=> this.setState({username:newValue})} 
                    placeholder="Username" type="text"/>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <input className="form-control" name="email"
                    onChange={(event,newValue)=> this.setState({email:newValue})} 
                    placeholder="Email" type="email"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <input className="form-control" name="password"
                    onChange={(event,newValue)=> this.setState({password:newValue})} 
                    placeholder="Password" type="password"/>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary my-4" 
                  onClick={(event)=>this.handleSubmit(event)}>Sign Up</button>
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
