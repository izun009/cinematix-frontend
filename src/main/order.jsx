import React, { Component } from 'react'
import pic1 from './pic/sm.jpg';

export default class order extends Component {
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

        {/* Orderan yang dibeli */}

        <div class="container" style={{marginTop:150,marginBottom:100}}>
        <div class="row">

          {/* gambar film */}
            <div class="col">
                <img class="card-img-top" src={pic1} alt="Card image top"
                    style={{maxWidth:"100%",maxHeight:"100%",height:"450px",width:"380px"}}
                />
            </div>

          {/* Deskripsi Film */}
          <div class="col">
            <dl class="row">
              <dt class="col-sm-3">Title</dt>
              <dd class="col-sm-9">Alita: The Battle Angel</dd>

              <dt class="col-sm-3">Durasi</dt>
              <dd class="col-sm-9"><p>90</p></dd>

              <dt class="col-sm-3">Kategori</dt>
              <dd class="col-sm-9"><p>Action</p></dd>

              <dt class="col-sm-3">Sinopsis</dt>
              <dd class="col-sm-9">
                <p>Etiam porta sem malesuada magna mollis euismod.</p>
                <p>Etiam porta sem malesuada magna mollis euismod.</p>
                <p>Etiam porta sem malesuada magna mollis euismod.</p>
                <p>Etiam porta sem malesuada magna mollis euismod.</p>
                <p>Etiam porta sem malesuada magna mollis euismod.</p>
                <p>Etiam porta sem malesuada magna mollis euismod.</p>
                <p>Etiam porta sem malesuada magna mollis euismod.</p>
              </dd>
            </dl>
          </div>
        </div>
        {/* tutup row */}

        </div>
        {/* tutup kontainer */}


        {/* Pilih Kursi */}
        <div class="container" style={{marginTop:150,marginBottom:100}}>
        <div className="col">
            <h2 class="display-4" >Pilih Kursi dan Jadwal</h2>
            <hr style={{width:"78%",marginLeft:"-11px"}}/>
        </div>
        <div className="row">
          <div class="col">
          <form action="post">
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">A1</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A2</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A3</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A4</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">A5</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A6</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A7</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A8</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">A9</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A10</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A11</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A12</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">A13</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A14</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A15</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A16</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">A17</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A18</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A19</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">A20</button>
              </td>
            </tr>
          </form>
          </div>
          <div class="col">
          <form action="post">
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">B1</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B2</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B3</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B4</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">B5</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B6</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B7</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B8</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">B9</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B10</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B11</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B12</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">B13</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B14</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B15</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B16</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">B17</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B18</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B19</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">B20</button>
              </td>
            </tr>
          </form>
          </div>
        </div>
      </div>


      {/* waktu dan tanggal */}
      <div class="container" style={{marginTop:150,marginBottom:100}}>
        <div className="row">
        <div className="col">
            <h2 class="display-4" >8 April</h2>
        </div>
        <div className="col">
        <h2 class="display-4" >9 April</h2>
        </div>
        </div>
        
        <div className="row">
          <div class="col">
          <form action="post">
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">07.45</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">08.45</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">10.45</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">12.45</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">13.30</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">15.30</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">17.30</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">19.30</button>
              </td>
            </tr>
          </form>
          </div>
          <div class="col">
          <form action="post">
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">07.45</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">08.45</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">10.45</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">12.45</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-outline-dark">13.30</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">15.30</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">17.30</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-dark">19.30</button>
              </td>
            </tr>
          </form>
          </div>
          <hr style={{width:"78%",marginLeft:"-11px"}}/>
        </div>
        <div className="row">
          <div className="col">
            <h2 class="display-4" >* Harga Per Tiket : Rp. 40.000,00-</h2>
          </div>
        </div>
      </div>


      <div className="container" style={{marginBottom:100}}>
      <div className="row">
        <div className="col">
            <h4 class="display-4" >Kursi dan Jadwal Pilihan Anda :</h4>
        </div>
      </div>
        <div className="row">
          <div className="col">
            <form action="" method="get">
              <table>
                <tr>
                  <td>Kursi  :</td>
                  <td>
                    {/* Untuk menampilkan jumlah kursi yang dipesan */}
                    <input type="button" value="A1"/>
                    <input type="button" value="A2"/>
                  </td>
                </tr>  
                <tr>
                  <td>Tiket  :</td>
                  <td><input type="text"  value=""/></td>
                </tr>    
                <tr>
                  <td>Harga :</td>
                  <td><input type="text" name="harga" value=""/></td>
                </tr>  
                <tr>
                  <td></td>
                  <td><a href="/pesanan" class="btn btn-outline-dark" role="button">Lanjutkan</a></td>
                </tr>          
              </table>             
            </form>
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
