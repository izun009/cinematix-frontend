import React, { Component } from 'react'
import Modal from 'react-modal';
import Validation from 'react-validation';

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
    this.logChange = this.logChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  openModal(pembeli){
    alert('Test');
    this.setState({
      modalIsOpen : true,
      email : pembeli.email,
      password : pembeli.password,
      saldo : pembeli.saldo,
      id : pembeli.id_pembeli
    });
  }

  closeModal(){
    this.setState({
      modalIsOpen : false
    });
  }

  logChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleEdit(evt){
    evt.preventDefault();
    var data = {
      email : this.state.email,
      password : this.state.password,
      saldo : this.state.saldo,
      id_pembeli : this.state.id_pembeli
    }

    fetch('http://localhost:4000/api/v1/pembeli', {
      method : 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if(res.status >= 400){
        throw new Error("Bad Response From Server");
      }
      return res.json();
    }).then((data) => {
      console.log(data);
      if(data == "Success"){
        this.setState({
          msg: "User has been edited"
        });
      }
    }).catch((err) => {
      console.log(err);
    })
  }


  componentDidMount(){
    let self = this;
    fetch('http://localhost:4000/api/v1/pembeli', {
      method : 'GET'
    }).then((res) => {
      if(res.status >= 400){
        throw new Error("Bad Response From Server");
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
                  <tr>
                    <td>
                      <div className="media align-items-center">
                        <div className="media-body">
                          <span className="mb-0 text-sm">{pembeli.id_pembeli}</span>
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
                          <span className="mb-0 text-sm">{pembeli.saldo}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a onClick={() => this.openModal(pembeli)} className="btn btn-sm btn-primary">Ubah</a>
                      <a href="#!" className="btn btn-sm btn-primary">Hapus</a>
                    </td>
                  </tr>
                )}

                <div className="modal" action="POST" isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} onSubmit={this.handleEdit}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" onChange={this.logChange} value={this.state.email} aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" onChange={this.logChange} value={this.state.password} placeholder="Password" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Saldo</label>
                  <input type="password" className="form-control" onChange={this.logChange} value={this.state.saldo} placeholder="Saldo" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                {/* <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  contentLabel="Modal Tested" >
                    <Validation.components.Form onSubmit={this.handleEdit} method="POST">
                      <label>Name</label>
                      <Validation.components.Input onChange={this.logChange} className="form-control" value={this.state.name} placeholder='John' name='name' validations={['required']}/>
                        <label>Email</label>
                        <Validation.components.Input onChange={this.logChange} className="form-control" value={this.state.email} placeholder='email@email.com' name='email' validations={['required', 'email']}/>
                        <div className="submit-section">
                          <Validation.components.Button className="btn btn-uth-submit">Submit</Validation.components.Button>
                        </div>
                    </Validation.components.Form>
                </Modal> */}
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
