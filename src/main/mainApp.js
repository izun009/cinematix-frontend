import React from 'react';
import MovieCategory from './movieCategory';
import MovieCarosel from './movieCarosel';
import MainMovie from './mainMovie';
import AppFooter from './AppFooter';
import AppAppBar from './AppAppBar';
// import main from './main';

function App() {
  return (
    <React.Fragment>
      <AppAppBar/>
      <MovieCarosel />
      <MainMovie />
      <MovieCategory />
      {/* <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero /> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default App;
