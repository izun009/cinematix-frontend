import React, { Component } from 'react'
import pic1 from './pic/joker.jpg';
import pic2 from './pic/bones.jpg';
import pic3 from './pic/boom.jpg';



export class main extends Component {
    render() {
        return (

<div>
        <h2 class="display-2" style={{marginTop:50,marginBottom:45,textAlign:"center"}}>
            PLAYING NOW
            <hr style={{width:200,border:"2px solid red"}}/>
        </h2>

    <div class="container" style={{marginTop:10}}>
        <div class="row">
        <div class="card-group">
       
                <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                    <a href="/order">
                        <img class="card-img-top" src={pic1} alt="Card image top" style={{height:"22rem"}}/>
                    <div class="card-body" style={{height:"6rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                    </a>
                    <div class="card-footer">
                        <a href="/order" class="btn btn-outline-light">Order</a>
                    </div>
                </div>
       

                <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                    <a href="/order">
                        <img class="card-img-top" src={pic2} alt="Card image cap" style={{height:"22rem"}}/>
                    <div class="card-body" style={{height:"6rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                    </a>
                    <div class="card-footer">
                        <a href="/order" class="btn btn-outline-light">Order</a>
                    </div>
                </div>
                <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                <a href="/order">
                    <img class="card-img-top" src={pic3} alt="Card image cap" style={{height:"22rem"}}/>
                    <div class="card-body" style={{height:"6rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                </a>
                    <div class="card-footer">
                        <a href="/order" class="btn btn-outline-light">Order</a>
                    </div>
                </div>
            </div>
            </div>

            <div class="row">
            <div class="card-group">
                <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                <a href="/order">
                    <img class="card-img-top" src={pic1} alt="Card image top" style={{height:"22rem"}}/>
                    <div class="card-body" style={{height:"6rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                </a>
                    <div class="card-footer">
                        <a href="/order" class="btn btn-outline-light">Order</a>
                    </div>
                </div>
                <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                <a href="/order">
                    <img class="card-img-top" src={pic2} alt="Card image cap" style={{height:"22rem"}}/>
                    <div class="card-body" style={{height:"6rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                </a>
                    <div class="card-footer">
                        <a href="/order" class="btn btn-outline-light">Order</a>
                    </div>
                </div>
                <div class="card" style={{maxWidth: 300,margin:"2rem"}}>
                <a href="/order">
                    <img class="card-img-top" src={pic3} alt="Card image cap" style={{height:"22rem"}}/>
                    <div class="card-body" style={{height:"6rem"}}>
                        <h2 class="card-title">Joker: The Master of Clown</h2>
                    </div>
                </a>
                    <div class="card-footer">
                        <a href="/order" class="btn btn-outline-light">Order</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>            
        )
    }
}

export default main
