import React, { Component } from 'react'

export class Pembeli extends Component {

  constructor(props){
    super(props)
    this.state = {
      users : [],
      modalIsOpen : false,
      email : '',
      password : '',
      saldo : '',
      id_pembeli : 0
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeSaldo = this.onChangeSaldo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  openModal(pembeli){
    // alert('Test');
    this.setState({
      modalIsOpen : true,
      email : pembeli.email,
      password : pembeli.password,
      saldo : pembeli.saldo,
      id_pembeli : pembeli.id_pembeli
    });
  }

  closeModal(pembeli){
    this.setState({
      modalIsOpen : false
    });
  }

  onChangeEmail(e){
    this.setState({
      email : e.target.value
    });
  }

  onChangeId(e){
    this.setState({
      id_pembeli : e.target.value
    });
  }

  onChangePassword(e){
    this.setState({
      password : e.target.value
    });
  }

  onChangeSaldo(e){
    this.setState({
      saldo : e.target.value
    });
  }

  // handleSubmit(e){
  //   e.preventDefault();
  //       var obj = {
  //           email: this.state.email,
  //           password:this.state.password,
  //           saldo : this.state.saldo
  //       }
  //       console.log(obj)
  //       fetch("http://localhost:5000/api/v1/pembeli/add", {
  //           method: 'POST',
  //           headers: {'Content-Type': 'application/json'},
  //           body: JSON.stringify(obj)
  //       }).then(function(response) {
  //           if (response.status >= 400) {
  //             throw new Error("Bad response from server");
  //           }
  //           return response.json();
  //       }).then(function(obj) {
  //           console.log(obj)    
  //           if(obj == "success"){
  //              this.setState({msg: "Thanks for registering"});  
  //           }
  //       }).catch(function(err) {
  //           console.log(err)
  //       });
  //     }

  
  onDelete(pembeli){
    const obj = {
        id_pembeli: pembeli.id_pembeli
        // email : pembeli.email,
        // password : pembeli.password,
        // saldo : pembeli.saldo
    }
    console.log(obj);

    fetch('http://localhost:5000/api/v1/pembeli/del', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    }).then((res) => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      // return response.json();
    }).then((obj) => {
      if(obj === "success"){
         this.setState({msg: "User has been deleted."});  
      }
      window.location = window.location;
    }).catch((err) => {
      console.log(err)
  });
  }
  
  onSubmit(e){
    e.preventDefault();
    const obj = {
      email : this.state.email,
      password : this.state.password,
      saldo : this.state.saldo,
      id_pembeli : this.state.id_pembeli
    }
    console.log(obj);
    fetch('http://localhost:5000/api/v1/pembeli/edit', {
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
    fetch('http://localhost:5000/api/v1/pembeli', {
      method : 'GET'
    }).then((res) => {
      if(res.status >= 400){
        throw new Error("Bad Response");
      }
      return res.json();
    }).then((data) => {
      self.setState({users: data});
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
                    <i className="ni ni-tv-2 text-primary"></i>Dashboard
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
          <div className="row mt-3">
        <div className="col">
          <div className="card bg-default shadow">

              <div className="card-header bg-transparent border-0">
                <div className="row align-items-center">
                    <div className="col">
                      <h3 className="text-white mb-0">Tabel Pembeli</h3>              
                    </div>
                </div>   
              </div>
            <div className="table-responsive">
              <table className="table align-items-center table-dark table-flush">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">ID Pembeli</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Saldo</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- Pembeli --> */}
                {this.state.users.map(pembeli =>
                  <tr key={Pembeli.id_pembeli}>
                    <td>
                      <div className="media align-items-center">
                        <div className="media-body">
                          <span name="id_pembeli" className="mb-0 text-sm">{pembeli.id_pembeli}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="media align-items-center">
                        <div className="media-body">
                          <span className="mb-0 text-sm">{pembeli.email}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="media align-items-center">
                        <div className="media-body">
                          <span className="mb-0 text-sm">{pembeli.password}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="media align-items-center">
                        <div className="media-body">
                          <span className="mb-0 text-sm">Rp. {pembeli.saldo}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button onClick={() => this.openModal(pembeli)} data-toggle="modal"
                      data-target="#myModal" className="btn btn-sm btn-primary">Ubah</button>
                      <button onClick={() => this.onDelete(pembeli)} className="btn btn-sm btn-primary">Hapus</button>
                    </td>
                  </tr>
                )}

                  <div id="myModal" className="modal fade" isOpen={this.state.modalIsOpen} 
                       onRequestClose={this.closeModal}>
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Tabel Pembeli</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <form onSubmit={this.onSubmit} method='POST'>
                        <div className="modal-body">
                          <label style={{color:"black"}}>Email address</label>
                          <input type="email" className="form-control" onChange={this.onChangeEmail} value={this.state.email} placeholder="email"/>
                          <label style={{color:"black"}}>Password</label>
                          <input type="password" className="form-control" onChange={this.onChangePassword} value={this.state.password} placeholder="password"/>
                          <label style={{color:"black"}}>Saldo</label>
                          <input type="saldo" className="form-control" onChange={this.onChangeSaldo} value={this.state.saldo} placeholder="saldo"/>
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

export default Pembeli
