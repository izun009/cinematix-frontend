import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
          <div className="container-fluid">
            {/* <!-- Toggler --> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main"
              aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <!-- Brand --> */}
            <a className="navbar-brand pt-0" href="/">
              <h1>CINEMATIX</h1>
              <hr />
            </a>            
            {/* <!-- Collapse Header --> */}
            <div className="collapse navbar-collapse" id="sidenav-collapse-main">
              {/* <!-- Form --> */}
              <form className="mt-4 mb-3 d-md-none">
                <div className="input-group input-group-rounded input-group-merge">
                  <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Search"
                    aria-label="Search" />
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <span className="fa fa-search"></span>
                    </div>
                  </div>
                </div>
              </form>
              {/* <!-- Navigation --> */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="ni ni-tv-2 text-primary"></i> Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    <i className="ni ni-single-02 text-yellow"></i> Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#submenu" data-toggle="collapse">
                    <i className="ni ni-bullet-list-67 text-red"></i> Tables
                  </a>
                  <div id="submenu" className="collapse sidebar-submenu">
                    <a href="/pembeli" className="list-group-item list-group-item-action">
                        <span className="menu-collapsed">Pembeli</span>
                    </a>
                    <a href="/film" className="list-group-item list-group-item-action">
                        <span className="menu-collapsed">Film</span>
                    </a>
                    <a href="/kategori" className="list-group-item list-group-item-action">
                        <span className="menu-collapsed">Kategori</span>
                    </a>
                    <a href="/tiket" className="list-group-item list-group-item-action">
                        <span className="menu-collapsed">Tiket</span>
                    </a>
                    <a href="/jadwal" className="list-group-item list-group-item-action">
                        <span className="menu-collapsed">Jadwal</span>
                    </a>
                    <a href="/jadwal-film" className="list-group-item list-group-item-action">
                        <span className="menu-collapsed">Jadwal Film</span>
                    </a>
                    <a href="/pembayaran" className="list-group-item list-group-item-action">
                        <span className="menu-collapsed">Pembayaran</span>
                    </a>
                    <a href="/studio" className="list-group-item list-group-item-action">
                        <span className="menu-collapsed">Studio</span>
                    </a>
                    <a href="/kursi" className="list-group-item list-group-item-action">
                        <span className="menu-collapsed">Kursi</span>
                    </a>
                    <a href="/studio-kursi" className="list-group-item list-group-item-action">
                        <span className="menu-collapsed">Studio Kursi</span>
                    </a>
                    <a href="/pemesanan" className="list-group-item list-group-item-action">
                        <span className="menu-collapsed">Pemesanan</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* main content */}
        <div class="main-content">
    {/* <!-- Top navbar --> */}
    <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
      <div class="container-fluid">
        {/* <!-- Brand --> */}
        <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="/profile">Admin profile</a>
        {/* <!-- Form --> */}
        <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
          <div class="form-group mb-0">
            <div class="input-group input-group-alternative">
              <div class="input-group-prepend">
                <span class="input-group-text"></span>
              </div>
              <input class="form-control" placeholder="Search" type="text"/>
            </div>
          </div>
        </form>
        {/* <!-- User --> */}
        <ul class="navbar-nav align-items-center d-none d-md-flex">
          <li class="nav-item dropdown">
            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="../assets/img/theme/profile-logo.png"/>
                </span>
                <div class="media-body ml-2 d-none d-lg-block">
                  <span class="mb-0 text-sm  font-weight-bold">Admin</span>
                </div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div class=" dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="/profile" class="dropdown-item">
                <i class="ni ni-single-02"></i>
                <span>My profile</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#!" class="dropdown-item">
                <i class="ni ni-user-run"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    {/* <!-- Header --> */}
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style={{minHeight: "600px", backgroundImage: "url(../assets/img/theme/lonely.jpg)", 
      backgroundSize: "cover", backgroundPosition: "center top"}}>
      {/* <!-- Mask --> */}
      <span class="mask bg-gradient-default opacity-8"></span>
      {/* <!-- Header container --> */}
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">Hello !</h1>
            <p class="text-white mt-0 mb-5">This is your profile page.
              You can see your own profile and make it change</p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Page content --> */}
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-12 order-xl-1">
          <div class="card bg-secondary shadow">
            <div class="card-header bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">My account</h3>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form>
                <h6 class="heading-small text-muted mb-4">User information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    {/* <!-- Name of User --> */}
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-username">Name</label>
                        <input type="text" id="input-username" class="form-control form-control-alternative"
                          placeholder="Name" value=""/>
                      </div>
                    </div>
                    {/* <!-- User Email --> */}
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email">Email</label>
                        <input type="email" id="input-email" class="form-control form-control-alternative"
                          placeholder="email" value=""/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-password">Password</label>
                        <input type="text" id="input-password" class="form-control form-control-alternative"
                          placeholder="Password" value=""/>
                      </div>
                    </div>
                  </div>
                  <a href="#!" class="btn btn-info">Edit</a>
                  <a href="#!" class="btn btn-info">Save</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer --> */}
      <footer class="py-3">
        <div class="container">
          <div class="row align-items-center justify-content-xl-between">
            <div class="col-xl-6">
              <div class="copyright text-center text-xl-left text-muted">
                &copy; 2019 <a href="https://www.kodekita.net" class="font-weight-bold ml-1" target="_blank">KodeKita
                  Tim</a>
              </div>
            </div>
            <div class="col-xl-6">
              <ul class="nav nav-footer justify-content-center justify-content-xl-end">
                <li class="nav-item">
                  <a href="https://www.kodekita.net" class="nav-link" target="_blank">KodeKita Tim</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.kodekita.net" class="nav-link" target="_blank">About Us</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.kodekita.net" class="nav-link" target="_blank">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
      </div>
    );
  }
}

export default Profile
