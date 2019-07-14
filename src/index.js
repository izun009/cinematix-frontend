import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Indeks from './views/Indeks';
import Profile from './views/Profile';
import Login from './views/Login';
import Register from './views/Register';
import Pembeli from './views/Pembeli';
import Film from './views/Film';
import Jadwal from './views/Jadwal';
import JadwalFilm from './views/JadwalFilm';
import Kategori from './views/Kategori';
import Kursi from './views/Kursi';
import Studio from './views/Studio';
import StudioKursi from './views/StudioKursi';
import Pemesanan from './views/Pemesanan';
import Tiket from './views/Tiket';
import Pembayaran from './views/Pembayaran';
import main from './main/mainApp';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
    <div>
        <Route exact path="/" component={main} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/pembeli" component={Pembeli} />
        <Route exact path="/film" component={Film} />
        <Route exact path="/jadwal" component={Jadwal} />
        <Route exact path="/jadwal-film" component={JadwalFilm} />
        <Route exact path="/kategori" component={Kategori} />
        <Route exact path="/kursi" component={Kursi} />
        <Route exact path="/studio" component={Studio} />
        <Route exact path="/studio-kursi" component={StudioKursi} />
        <Route exact path="/pemesanan" component={Pemesanan} />
        <Route exact path="/tiket" component={Tiket} />
        <Route exact path="/pembayaran" component={Pembayaran} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
    </div>
    </Router> 
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
