import React, { Component } from 'react'
import first from './pic/bones.jpg';
import second from './pic/boom.jpg';
import third from './pic/fallout.jpg';
import pic1 from './pic/joker.jpg';
import pic2 from './pic/bones.jpg';
import pic3 from './pic/boom.jpg';



export class main extends Component {
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

        {/* ----------Carousel---------- */}
        
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" >
                <img class="d-block w-100" style={{height:"42rem"}} src={first} alt="First slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" style={{height:"42rem"}} src={second} alt="Second slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" style={{height:"42rem"}} src={third} alt="Third slide"/>
            </div>
          </div>
        </div>

        {/* ---------Batas---------- */}

        <h2 class="display-2" style={{marginTop:50,marginBottom:45,textAlign:"center"}}>
            Playing Now
            <hr style={{width:200,border:"2px solid red"}}/>
        </h2>

        {/* ---------Batas---------- */}

        <div class="container" style={{marginTop:10}}>
        <div class="row">

            <div class="col-md-4" >
                <div class="card" style={{marginTop:30,height:"30rem"}}>
                    <img class="card-img-top" src={pic1} alt="Card image top" style={{height:"20rem"}}/>
                    <div class="card-body" style={{height:"0rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                    <div class="card-footer">
                        <a class="btn btn-outline-light">View</a>
                        <a class="btn btn-outline-light">Order</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4" >
                <div class="card" style={{marginTop:30,height:"30rem"}}>
                    <img class="card-img-top" src={pic2} alt="Card image cap" style={{height:"20rem"}}/>
                    <div class="card-body" style={{height:"0rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                    <div class="card-footer">
                        <a class="btn btn-outline-light">View</a>
                        <a class="btn btn-outline-light">Order</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4" >
                <div class="card" style={{marginTop:30,height:"30rem"}}>
                    <img class="card-img-top" src={pic3} alt="Card image cap" style={{height:"20rem"}}/>
                    <div class="card-body" style={{height:"0rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                    <div class="card-footer">
                        <a class="btn btn-outline-light">View</a>
                        <a class="btn btn-outline-light">Order</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">

        <div class="col-md-4" >
                <div class="card" style={{marginTop:30,height:"30rem"}}>
                    <img class="card-img-top" src={pic1} alt="Card image top" style={{height:"20rem"}}/>
                    <div class="card-body" style={{height:"0rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                    <div class="card-footer">
                        <a class="btn btn-outline-light">View</a>
                        <a class="btn btn-outline-light">Order</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4" >
                <div class="card" style={{marginTop:30,height:"30rem"}}>
                    <img class="card-img-top" src={pic2} alt="Card image cap" style={{height:"20rem"}}/>
                    <div class="card-body" style={{height:"0rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                    <div class="card-footer">
                        <a class="btn btn-outline-light">View</a>
                        <a class="btn btn-outline-light">Order</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4" >
                <div class="card" style={{marginTop:30,height:"30rem"}}>
                    <img class="card-img-top" src={pic3} alt="Card image cap" style={{height:"20rem"}}/>
                    <div class="card-body" style={{height:"0rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                    <div class="card-footer">
                        <a class="btn btn-outline-light">View</a>
                        <a class="btn btn-outline-light">Order</a>
                    </div>
                </div>
            </div>
        </div>
        </div> 

        {/* ---------Batas---------- */}
        <h2 class="display-2" style={{marginTop:50,marginBottom:45,textAlign:"center"}}>
            Comming Soon
            <hr style={{width:200,border:"2px solid red"}}/>
        </h2>
        
        {/* ---------Batas---------- */}

        <div class="container" style={{marginTop:10}}>
        <div class="row">

            <div class="col-md-4" >
                <div class="card" style={{marginTop:30,height:"30rem"}}>
                    <img class="card-img-top" src={pic1} alt="Card image top" style={{height:"20rem"}}/>
                    <div class="card-body" style={{height:"0rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                    <div class="card-footer">
                        <a class="btn btn-outline-light">View</a>
                        <a class="btn btn-outline-light">Order</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4" >
                <div class="card" style={{marginTop:30,height:"30rem"}}>
                    <img class="card-img-top" src={pic2} alt="Card image cap" style={{height:"20rem"}}/>
                    <div class="card-body" style={{height:"0rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                    <div class="card-footer">
                        <a class="btn btn-outline-light">View</a>
                        <a class="btn btn-outline-light">Order</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4" >
                <div class="card" style={{marginTop:30,height:"30rem"}}>
                    <img class="card-img-top" src={pic3} alt="Card image cap" style={{height:"20rem"}}/>
                    <div class="card-body" style={{height:"0rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                    <div class="card-footer">
                        <a class="btn btn-outline-light">View</a>
                        <a class="btn btn-outline-light">Order</a>
                    </div>
                </div>
            </div>
        </div>
        </div> 

        {/* ---------Batas---------- */}
        <h2 class="display-2" style={{marginTop:50,marginBottom:45,textAlign:"center"}}>
            For All Categories
            <hr style={{width:200,border:"2px solid red"}}/>
        </h2>
        
        {/* ---------Batas---------- */}

        <div class="container">
        <div class="row">
        <div class="card-group">
            <div class="card">
                <a href="#" style={{backgroundColor:"white"}}>
                <img class="card-img-top" src={pic1} alt="Card image cap"/></a>
            </div>
            <div class="card">
            <a href="#"><img class="card-img-top" src={pic2} alt="Card image cap"/></a>
            </div>
            <div class="card">
            <a href="#"><img class="card-img-top" src={pic3} alt="Card image cap"/></a>
            </div>
        </div>  
        </div>  
        <div class="row">
        <div class="card-group">
            <div class="card">
                <img class="card-img-top" src={pic1} alt="Card image cap"/>
            </div>
            <div class="card">
                <img class="card-img-top" src={pic2} alt="Card image cap"/>
            </div>
            <div class="card">
                <img class="card-img-top" src={pic3} alt="Card image cap"/>
            </div>
        </div>  
        </div> 
        <div class="row">
        <div class="card-group">
            <div class="card">
                <img class="card-img-top" src={pic1} alt="Card image cap"/>
            </div>
            <div class="card">
                <img class="card-img-top" src={pic2} alt="Card image cap"/>
            </div>
            <div class="card">
                <img class="card-img-top" src={pic3} alt="Card image cap"/>
            </div>
        </div>  
        </div> 
        </div>

        </div>
        )
    }
}

export default main
