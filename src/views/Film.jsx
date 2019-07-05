import React, { Component } from 'react'

export class Film extends Component {


  constructor(props){
    super(props)
    this.state = {
      movie : [],
      modalIsOpen : false,
      judul : '',
      sinopsis : '',
      jam_mulai : '',
      durasi : '',
      id_film : 0
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeDurasi = this.onChangeDurasi.bind(this);
    this.onChangejudul = this.onChangejudul.bind(this);
    this.onChangesinopsis = this.onChangesinopsis.bind(this);
    this.onChangejam_mulai = this.onChangejam_mulai.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  openModal(film){
    // alert('Test');
    this.setState({
      modalIsOpen : true,
      judul : film.judul,
      sinopsis : film.sinopsis,
      jam_mulai : film.jam_mulai,
      id_film : film.id_film
    });
  }

  closeModal(film){
    this.setState({
      modalIsOpen : false
    });
  }

  onChangejudul(e){
    this.setState({
      judul : e.target.value
    });
  }

  onChangeId(e){
    this.setState({
      id_film : e.target.value
    });
  }

  onChangeDurasi(e){
    this.setState({
      durasi : e.target.value
    });
  }

  onChangesinopsis(e){
    this.setState({
      sinopsis : e.target.value
    });
  }

  onChangejam_mulai(e){
    this.setState({
      jam_mulai : e.target.value
    });
  }

  
  onDelete(film){
    const obj = {
        id_film: film.id_film
    }
    console.log(obj);

    fetch('http://localhost:5000/api/v1/film', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    }).then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      // return response.json();
    }).then(function(obj) {
      if(obj === "success"){
         this.setState({msg: "User has been deleted."});  
      }
      window.location = window.location;
    }).catch(function(err) {
      console.log(err)
  });
  }
  
  onSubmit(e){
    e.preventDefault();
    const obj = {
      durasi : this.state.durasi,
      judul : this.state.judul,
      sinopsis : this.state.sinopsis,
      jam_mulai : this.state.jam_mulai,
      id_film : this.state.id_film
    }
    console.log(obj);
    fetch('http://localhost:5000/api/v1/film', {
      method : 'PUT',
      headers : {'Content-Type': 'application/json'},
      body : JSON.stringify(obj)
    }).then(res => {
      if(res.status < 400){
        console.log("Success");
      }
      window.location = window.location;
    }).catch((err) => console.log(err));
  }
  

  componentDidMount(){
    let self = this;
    fetch('http://localhost:5000/api/v1/film', {
      method : 'GET'
    }).then((res) => {
      if(res.status >= 400){
        throw new Error("Bad Response");
      }
      return res.json();
    }).then((data) => {
      self.setState({movie: data});
    }).catch(err => {
      console.log('This is Error Code ', err);
    })
  }


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
            {/* <!-- Collapse header --> */}
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
        {/* <!-- Main content --> */}
        <div className="main-content">
          {/* <!-- Top navbar --> */}
          <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
            <div className="container-fluid">
              {/* <!-- Brand --> */}
              <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="/">Dashboard</a>
              {/* <!-- Form --> */}
              <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                <div className="form-group mb-0">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-search"></i></span>
                    </div>
                    <input className="form-control" placeholder="Search" type="text" />
                  </div>
                </div>
              </form>
              {/* <!-- User --> */}
              <ul className="navbar-nav align-items-center d-none d-md-flex">
                <li className="nav-item dropdown">
                  <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <div className="media align-items-center">
                      <span className="avatar avatar-sm rounded-circle">
                        <img alt="Image placeholder" src="./assets/img/theme/profile-logo.png" />
                      </span>
                      <div className="media-body ml-2 d-none d-lg-block">
                        <span className="mb-0 text-sm  font-weight-bold">Admin</span>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                    <a href="/profile" className="dropdown-item">
                      <i className="ni ni-single-02"></i>
                      <span>My profile</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-user-run"></i>
                      <span>Logout</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          {/* <!-- Header --> */}
          <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8"></div>
          {/* <!-- Page content --> */}
          <div className="container-fluid mt--7">
          {/* dark table */}
          <div className="row mt-3">
        <div className="col">
          <div className="card bg-default shadow">
            <div className="card-header bg-transparent border-0">
            <div className="row align-items-center">
                  <div className="col">
                    <h3 className="text-white mb-0">Tabel Film</h3>
                  </div>
                </div>
            </div>
            <div class="table-responsive">
              <table class="table align-items-center table-dark table-flush">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">ID Film</th>
                    <th scope="col">Judul</th>
                    <th scope="col">Sinopsis</th>
                    <th scope="col">Mulai</th>
                    <th scope="col">Durasi</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- Film --> */}
                  {this.state.movie.map(film =>
                  <tr>
                    <td>
                      <div class="media align-items-center">
                        <div class="media-body">
                          <span class="mb-0 text-sm">{film.id_film}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="media align-items-center">
                        <div class="media-body">
                          <span class="mb-0 text-sm">{film.judul}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="media align-items-center">
                        <div class="media-body">
                          <span class="mb-0 text-sm">{film.sinopsis}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="media align-items-center">
                        <div class="media-body">
                          <span class="mb-0 text-sm">{film.jam_mulai}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="media align-items-center">
                        <div class="media-body">
                          <span class="mb-0 text-sm">{film.durasi}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button onClick={() => this.openModal(film)} data-toggle="modal"
                      data-target="#myModal" className="btn btn-sm btn-primary">Ubah</button>
                      <button onClick={() => this.onDelete(film)} className="btn btn-sm btn-primary">Hapus</button>
                    </td>
                  </tr>
                  )}

                  <div id="myModal" className="modal fade" isOpen={this.state.modalIsOpen} 
                       onRequestClose={this.closeModal}>
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Tabel film</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <form onSubmit={this.onSubmit} method='POST'>
                        <div className="modal-body">
                          <label style={{color:"black"}}>Judul Film</label>
                          <input type="judul" className="form-control" onChange={this.onChangejudul} value={this.state.judul} placeholder="judul"/>
                          <label style={{color:"black"}}>Sinopsis</label>
                          <input type="sinopsis" className="form-control" onChange={this.onChangesinopsis} value={this.state.sinopsis} placeholder="sinopsis"/>
                          <label style={{color:"black"}}>Jam Mulai</label>
                          <input type="jam_mulai" className="form-control" onChange={this.onChangejam_mulai} value={this.state.jam_mulai} placeholder="jam_mulai"/>
                          <label style={{color:"black"}}>Durasi</label>
                          <input type="durasi" className="form-control" onChange={this.onChangeDurasi} value={this.state.durasi} placeholder="Durasi"/>
                        </div>
                        <div className="modal-footer">
                          <button type="submit" className="btn btn-primary">Save</button>
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
            {/* <!-- Footer --> */}
            <footer className="py-3">
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
        </div>
      </div>
    )
  }
}

export default Film
