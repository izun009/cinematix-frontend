import React, { Component } from 'react'
import brcd from './pic/barcode.png'

export default class pesanan extends Component {
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
                
            {/* isi */}
            {/* <div className="container" style={{marginTop:200,marginBottom:200}}> */}
            {/* <table class="table">
            <tbody>
                <tr>
                    <th scope="row">Nama Film</th>
                    <td>Mark</td>

                </tr>
                <tr>
                    <th scope="row">Tanggal</th>
                    <td>Jacob</td>
                </tr>
                <tr>
                    <th scope="row">Jam Tayang</th>
                    <td>Jacob</td>
                </tr>
                <tr>
                    <th scope="row">Kursi</th>
                    <td>Jacob</td>
                </tr>
                <tr>
                    <th scope="row">Harga Tiket</th>
                    <td>Jacob</td>
                </tr>
            </tbody>
            </table> */}
            {/* <dl class="row">
              <dt class="col-sm-3">Nama Film</dt>
              <dd class="col-sm-9">AVENGER END GAME</dd>

              <dt class="col-sm-3">Tanggal</dt>
              <dd class="col-sm-9"><p>90</p></dd>

              <dt class="col-sm-3">Jam Tayang</dt>
              <dd class="col-sm-9"><p>Action</p></dd>

              <dt class="col-sm-3">Kursi</dt>
              <dd class="col-sm-9">
                    <input type="button" value="A1"/>
                    <input type="button" value="A2"/>
              </dd>

              <dt class="col-sm-3">Harga</dt>
              <dd class="col-sm-9"><p>50.000</p></dd>
            </dl>
            <div className="col"><img src={brcd} alt="" className="img-thumbnail"/></div> */}
    


            {/* </div> */}
            <div className="container" style={{marginTop:100,marginBottom:100}}>
            <div class="row">
                 <div class="col-sm-3 text-uppercase">
                   Nama Film
                </div>
                <div class="col-sm-3 text-uppercase">
                    <dd class="col-sm-9">AVENGER END GAME</dd> 
                </div>
             </div>
             <div class="row">
                 <div class="col-sm-3 text-uppercase">
                    Tanggal
                </div>
                <div class="col-sm-3">
                    <dd class="col-sm-9"> 9 April </dd>
                </div>
             </div>
             <div class="row">
                 <div class="col-sm-3 text-uppercase">
                    Jam Tayang
                </div>
                <div class="col-sm-3">
                <dd class="col-sm-9"> 19:30 </dd>
                </div>
             </div>
             <div class="row">
                 <div class="col-sm-3 text-uppercase">
                    Kursi
                </div>
                <div class="col-sm-3">
                    {/* <dd class="col-sm-9"> A20 </dd> */}
                   <dd class="col-sm-9"> <input type="button" className="btn" value="A2"/></dd>
                </div>
             </div>
             <div class="row">
                 <div class="col-sm-3 text-uppercase">
                    Harga
                </div>
                <div class="col-sm-3">
                    <dd class="col-sm-9">40.000</dd>
                </div>
             </div>
             <div class="row">
                 <div class="col-sm-3">
                    Barcode
                </div>
                <div class="col-sm-3">
                    <dd class="col-sm-9"><img src={brcd} className="img-thumbnail" alt=""/></dd>
                </div>
             </div>
            </div>
             
            

                { /* Footer */ }
                <footer class="page-footer font-small pt-4" style={{backgroundColor:"#0f1011cf"}}>
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                    <div class="col-md-6 mt-md-0 mt-3">
                        <h5 class="text-uppercase" style={{color:"white"}}>About Us</h5>
                        <p style={{color:"white"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Amet commodo nulla facilisi nullam vehicula ipsum.
                        Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum.
                        Leo in vitae turpis massa. Justo laoreet sit amet cursus sit amet dictum sit.
                        ~ Qin Thil.
                        </p>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3"/>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="text-uppercase" style={{color:"white"}}>Support Team</h5>
                        <ul class="list-unstyled">
                        <li>
                            <a href="#!" style={{color:"white"}}>Cinemaxxx</a>
                        </li>
                        <li>
                            <a href="#!" style={{color:"white"}}>Cinema-tix</a>
                        </li>
                        <li>
                            <a href="getbootstrap.com" style={{color:"white"}}>Bootstarp Team</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div style={{backgroundColor:"white"}}class="footer-copyright text-center py-3">© 2019 Copyright:
                    <a href="kodekita.net"> Kodekita Team</a>
                </div>
                </footer>
            </div>
        )
    }
}
