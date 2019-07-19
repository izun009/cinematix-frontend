import React, { Component } from 'react'

export default class appFooter extends Component {
    render() {
        return (
            <div>         
            <footer class="page-footer font-small pt-4" style={{backgroundColor:"#0f1011cf",position:"absolute"}}>
              <div class="container-fluid text-center text-md-left">
                <div class="row">
                  <div class="col-md-6 mt-md-0 mt-3">
                    <h5 class="text-uppercase" style={{color:"white"}}>About Us</h5>
                    <p style={{color:"white"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Amet commodo nulla facilisi nullam vehicula ipsum. 
                    Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. 
                    Leo in vitae turpis massa. Justo laoreet sit amet cursus sit amet sit. 
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
