import React, { Component } from 'react'
import pic1 from './movie-pic/alita';
import pic2 from './movie-pic/cold-persuit';
import pic3 from './movie-pic/escape-room.jpg';
import pic4 from './movie-pic/lego-movie-2';
import pic5 from './movie-pic/the-prodigy';
import pic6 from './movie-pic/the-upside.jpg';
import pic7 from './movie-pic/captain-marvel';
import pic8 from './movie-pic/captain-state.jpg';
import pic9 from './movie-pic/five-feet.jpg';
import pic10 from './movie-pic/us.jpg';
import pic11 from './movie-pic/wonder-park.jpg';
import pic12 from './movie-pic/happy-death';
import pic13 from './movie-pic/hellboy.jpg';
import pic14 from './movie-pic/missing-link.jpg';
import pic15 from './movie-pic/pet-sematary.jpg';
import pic16 from './movie-pic/godzilla.jpg';
import pic17 from './movie-pic/breakthrough.jpg';
import pic18 from './movie-pic/avenger-endgame.jpg';

export class main extends Component {
    constructor(props){
        super(props)
        this.state = {
            film:[],
            judul: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        var jdl = document.getElementById('judul').getAttribute('value');

        const obj = {
          judul : jdl
        //   judul : this.state.judul,
        //   sinopsis : this.state.sinopsis,
        //   jam_mulai : this.state.jam_mulai,
        //   id_film : this.state.id_film
        }
        console.log(obj);
        fetch('http://localhost:5000/api/v1/film', {
          method : 'POST',
          headers : {'Content-Type': 'application/json'},
          body : JSON.stringify(obj)
        }).then(res => {
          if(res.status < 400){
            console.log("Success");
          }
        //   window.location = window.location;
        }).then(err => {
            if(err) throw new Error('This error : ',err);
        }).catch((err) => console.log(err));
    }

    // componentDidMount(){
    //     let self = this;

    //     fetch('http://localhost:5000/!#tampung-film',{
    //     method : 'GET',
    //     }).then(res => {
    //         if(res.status > 400){
    //             throw new Error("Bad Response");
    //         }
    //     }).then(data => {
    //         self.setState({film: data});
    //     });;
    // }



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
    <form action="" method="post">
    <div className="table-responsive">
              <table className="table">
                <tbody>
                    {/* movie 1 */}
                  <tr>
                    <td>
                        <form method="post" onSubmit={this.onSubmit}>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic1} alt="Card image top" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title" name="judul" id="judul" value="Alita: Battle Angel">
                                    Alita: Battle Angel
                                </h2>
                                {/* <h3 name="sinopsis">Robot wanita yang bertarung</h3> */}
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                        </form>
                    </td>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic2} alt="Card image cap" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Cold Pursuit</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic3} alt="Card image cap" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Escape Room</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                  </tr>
                  
                  {/* movie 2 */}
                  <tr>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic4} alt="Card image top" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">The Lego Movie 2</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic5} alt="Card image cap" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">The Prodigy</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic6} alt="Card image cap" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">The Upside</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                  </tr>
                  
                  {/* movie 3 */}
                  <tr>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic7} alt="Card image top" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Captain Marvel</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic8} alt="Card image cap" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Captain State</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic9} alt="Card image cap" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Five Feet Apart</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                  </tr>

                  {/* movie 4 */}
                  <tr>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic10} alt="Card image top" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Us</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic11} alt="Card image cap" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Wonder Park</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic12} alt="Card image cap" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Happy Death Day 2u</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                  </tr>

                  {/* movie 5 */}
                  <tr>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic13} alt="Card image top" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Hellboy (2019)</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic14} alt="Card image cap" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Missing Link</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic15} alt="Card image cap" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Pet Sematary</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                  </tr>

                  {/* movie 6 */}
                  <tr>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic16} alt="Card image top" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Godzilla: King Of The Monster</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic17} alt="Card image cap" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Breakthrough</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                            <a href="/order">
                                <img class="card-img-top" src={pic18} alt="Card image cap" style={{height:"22rem"}}/>
                            <div class="card-body" style={{height:"6rem"}}>
                                <h2 class="card-title">Avenger Endgame</h2>
                            </div>
                            </a>
                            <div class="card-footer">
                                <a href="/order" class="btn btn-outline-dark">Order</a>
                            </div>
                        </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            {/* table */}
            </form>
            </div>

</div>            
        )
    }
}

export default main
