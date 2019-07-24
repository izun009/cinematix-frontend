import React, { Component } from 'react'
// import pic1 from './movie-pic/alita.jpg';
// import pic2 from './movie-pic/cold-persuit.jpg';
// import pic3 from './movie-pic/escape-room.jpg';
// import pic4 from './movie-pic/lego-movie-2.jpg';
// import pic5 from './movie-pic/the-prodigy.jpg';
// import pic6 from './movie-pic/the-upside.jpg';
// import pic7 from './movie-pic/captain-marvel.jpg';
// import pic8 from './movie-pic/captain-state.jpg';
// import pic9 from './movie-pic/five-feet.jpg';
// import pic10 from './movie-pic/us.jpg';
// import pic11 from './movie-pic/wonder-park.jpg';
// import pic12 from './movie-pic/happy-death.jpg';
// import pic13 from './movie-pic/hellboy.jpg';
// import pic14 from './movie-pic/missing-link.jpg';
// import pic15 from './movie-pic/pet-sematary.jpg';
// import pic16 from './movie-pic/godzilla.jpg';
// import pic17 from './movie-pic/breakthrough.jpg';
// import pic18 from './movie-pic/avenger-endgame.jpg';
// import { file } from '@babel/types';

export class main extends Component {
    constructor(props){
        super(props)
        this.state = {
            pilem:[],
            judul: '',
            sinopsis:'',
            // jam_mulai:'',
            durasi:'',
            id_kategori:'',
            images:''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        var jdl = document.getElementById('judulfilm').value;
        var sin = document.getElementById('sinopsis').value;
        // var jm = document.getElementById('jam').value
        var dur = document.getElementById('durasi').value;
        var idKat = document.getElementById('kategori').value;
        var im = document.getElementById('img').files[0];
        // var uploaded_image = im.replace("C:\\fakepath\\","");
        // const formData = new FormData();
        // var im = formData.append('uploaded_image',this.state.images);

        const obj = {
          judul : jdl,
          sinopsis : sin,
        //   jam_mulai : jm,
          durasi : dur,
          id_kategori : idKat,
          images : im
        //   judul : this.state.judul,
        //   sinopsis : this.state.sinopsis,
        //   jam_mulai : this.state.jam_mulai,
        //   durasi : this.state.durasi.value,
        //   id_kategori : this.state.id_kategori
        //   images : this.state.images
        }
        console.log(obj);
        fetch('http://localhost:5000/api/v1/film', {
          method : 'POST',
          headers : {'Accept': 'application/json','Content-Type': 'multipart/form-data'},
          body : obj
        }).then(res => {
          if(res.status < 400){
            console.log("Success");
          }
        //   window.location = window.location;
        }).then(err => {
            if(err) throw new Error('This error : ',err);
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
          self.setState({pilem: data});
        }).catch(err => {
          console.log('This is Error Code ', err);
        })
      }

    render() {
        return (
<div>
        <h2 class="display-2" style={{marginTop:50,marginBottom:45,textAlign:"center"}}>
            PLAYING NOW
            <hr style={{width:200,border:"2px solid red"}}/>
        </h2>

    {/* <div class="container" style={{marginTop:10}}>
        <div class="row">
        <div class="card-group">   
        </div>
        </div>         
    </div> */}
    {/* kontainter */}
    <div class="container" style={{marginTop:10}}>
    <div className="table-responsive">
              <table className="table">
                <tbody>
                    {/* movie 1 */}
                {this.state.pilem.map(film =>
                  <tr key={film.id_film}>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={'http://localhost:5000/'+film.images.replace('public','')} alt="Card image top" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title" name="judul">
                                    {/* Alita: Battle Angel */}
                                    {film.judul}
                                </h2>
                                {/* <h3 name="sinopsis">Robot wanita yang bertarung</h3> */}
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                  </tr>
                  )}
                </tbody>
                
              </table>

              {/* tambah film */}
              <button data-toggle="modal" data-target="#myModal" className="btn btn-outline-dark">Tambah</button>
              <div id="myModal" className="modal fade"> 
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Add Movies</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <form method="POST" action="http://localhost:5000/api/v1/film" encType="multipart/form-data">
                        <div className="modal-body">
                          <label style={{color:"black"}}>Judul Film</label>
                          <input type="text" className="form-control" name="judul_film" id="judulfilm" placeholder="judul"/>
                          <label style={{color:"black"}}>Sinopsis</label>
                          <input type="text" className="form-control" name="sinopsis_film" id="sinopsis" placeholder="sinopsis"/>
                          {/* <label style={{color:"black"}}>Jam Mulai</label>
                          <input type="text" className="form-control" id="jam" placeholder="jam"/> */}
                          <label style={{color:"black"}}>Durasi</label>
                          <input type="text" className="form-control" name="durasi_film" id="durasi" placeholder="durasi"/>
                          <label style={{color:"black"}}>Kategori Film</label>
                          {/* <select name="kategori">
                              <option value="0">---Pilih---</option>
                              <option value="1">Action</option>
                              <option value="2">Adventure</option>
                              <option value="3">Horror</option>
                              <option value="4">Comedy</option>
                              <option value="5">Drama</option>
                              <option value="6">Historical</option>
                              <option value="7">Biography</option>
                              <option value="8">Sci-Fi</option>
                          </select><br/> */}
                          <input type="text" className="form-control" name="kategori_film" id="kategori" placeholder="kategori"/>
                          <label style={{color:"black"}}>Image Film</label><br/>
                          <input type="file" id="img" name="uploaded_image" accept=""/>
                        </div>
                        <div className="modal-footer">
                          <button type="submit" className="btn btn-primary">Save</button>
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>
                {/* end film */}
            </div>
            {/* table */}
            </div>
</div>            
        )
    }
}

export default main
