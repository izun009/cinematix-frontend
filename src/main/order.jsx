import React, { Component } from 'react'
import pic1 from './pic/joker.jpg';

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
            <div class="col">
                <img class="card-img-top" src={pic1} alt="Card image top"
                    style={{maxWidth:"100%",maxHeight:"100%",height:"450px",width:"380px"}}
                />
            </div>

          <div class="col">
            <dl class="row">
              <dt class="col-sm-3">Title</dt>
              <dd class="col-sm-9">AVENGER END GAME</dd>

              <dt class="col-sm-3">Durasi</dt>
              <dd class="col-sm-9"><p>90</p></dd>

              <dt class="col-sm-3">Sinopsis</dt>
              <dd class="col-sm-9">
                <p>Etiam porta sem malesuada magna mollis euismod.</p>
                <p>Etiam porta sem malesuada magna mollis euismod.</p>
                <p>Etiam porta sem malesuada magna mollis euismod.</p>
                <p>Etiam porta sem malesuada magna mollis euismod.</p>
                <p>Etiam porta sem malesuada magna mollis euismod.</p>
              </dd>
            </dl>
          </div>

            
            {/* <div class="col">
            <div className="table-responsive">
              <table className="table align-items-center table-dark table-flush">
                <tbody>
                  <tr>
                    <td>
                      <div className="media align-items-center">
                        <div className="media-body">
                          <span name="title" className="mb-0 text-sm">AVENGER END GAME</span>
                        </div>
                      </div>
                      </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="media align-content-center">
                        <div className="media-body">
                          <span name="id_pembeli" className="mb-0 text-sm">Durasi</span>
                        </div>
                      </div>
                    </td>
                      <td>
                      <div className="media  align-content-center">
                        <div className="media-body">
                          <span name="id_pembeli" className="mb-0 text-sm">90</span>
                        </div>
                      </div>
                    </td>                   
                  </tr>
                  <tr>
                    <td>
                      <div className="media align-content-center">
                        <div className="media-body">
                          <span name="id_pembeli" className="mb-0 text-sm">Genre</span>
                        </div>
                      </div>
                    </td>
                      <td>
                      <div className="media  align-content-center">
                        <div className="media-body">
                          <span name="id_pembeli" className="mb-0 text-sm">Action</span>
                        </div>
                      </div>
                    </td>                   
                  </tr>
                  <tr>
                    <td>
                      <div className="media align-content-center">
                        <div className="media-body">
                          <span name="id_pembeli" className="mb-0 text-sm">Sinopsis</span>
                        </div>
                      </div>
                    </td>
                      <td>
                      <div className="media  align-content-center">
                        <div className="media-body">
                          <span name="id_pembeli" className="mb-0 text-sm"> 
                            Lorem ipsum dolor sit sed do eiusmod tempor incididunt <br/>
                            ut labore et dolore magna aliqua. Amet commodo nulla <br/>
                            facilisi nullam vehicula ipsum. Leo in vitae turpis massa. <br/>
                             Justo laoreet sit amet cursus sit amet dictum sit.<br/> 
                            ~ Qin Thil.
                          </span>
                        </div>
                      </div>
                    </td>                   
                  </tr>
                </tbody>
              </table>
            </div>
            </div> */}
        </div>
        {/* tutup row */}

        <div class="row" style={{marginTop:100}}>
          <div class="col">
            <table>
              
            </table>
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
