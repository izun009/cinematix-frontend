import React from 'react';
import MovieCategory from './movieCategory';
import MovieCarosel from './movieCarosel';
import MainMovie from './main';
import AppFooter from './appFooter';
import AppAppBar from './appBar';
// import Order from './order';
// import main from './main';

function App() {
  return (
    <React.Fragment>
      {/* <Order/> */}
      <AppAppBar/>
      <MovieCarosel />
      <MainMovie />
      {/* <MovieCategory /> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default App;
