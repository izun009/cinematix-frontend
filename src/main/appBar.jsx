import React, { Component } from 'react'

export default class appBar extends Component {
    render() {
        return (
            <div>
        {/* navigasi */}
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark" style={{backgroundColor:"#0f1011cf"}}>
            <a href="#" class="navbar-brand">CINEMATIXXX</a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="/" class="nav-item nav-link">Home</a>
                <a href="#" class="nav-item nav-link">Now Playing</a>
                <a href="#" class="nav-item nav-link">Comming Soon</a>
            </div>  
            <form class="form-inline ml-auto">
                <a href="/login" class="btn btn-outline-light">Sign In</a>
                <a href="/signup" class="btn btn-outline-light">Sign Up</a>
            </form>
        </div>
        </nav>
    </div>
        )
    }
}
