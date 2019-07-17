import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from './Button';
import Typography from './Typography';
import MovieLayout from './movieLayout';
import first from './pic/sm.jpg';
import second from './pic/679301.jpg';
import third from './pic/machine.jpg';


// const backgroundImage =
//   'http://getwallpapers.com/wallpaper/full/5/3/6/679301.jpg';

// const styles = theme => ({
//   background: {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundColor: '#7a757580', // Average color of the background image.
//     backgroundPosition: 'center',
//   },
//   button: {
//     minWidth: 200,
//   },
//   h5: {
//     marginBottom: theme.spacing.unit * 4,
//     marginTop: theme.spacing.unit * 4,
//     [theme.breakpoints.up('sm')]: {
//       marginTop: theme.spacing.unit * 10,
//     },
//   },
//   more: {
//     marginTop: theme.spacing.unit * 2,
//   },
// });

function ProductHero(props) {
  const { classes } = props;

  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" >
                <img class="d-block w-100" style={{height:"42rem"}} src={first} alt="First slide"/>
                <div class="carousel-caption" >
                  <h1>Lets Turn Your Change</h1>
                    <p>This Will Be The Last Time To See You</p>
                </div>
            </div>
            <div class="carousel-item ">
                <img class="d-block w-100" style={{height:"42rem"}} src={second} alt="Second slide"/>
                <div class="carousel-caption " >
                  <h1>Laugh Without Contrition</h1>
                    <p>Just Open Your Fuckin' Mouth</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" style={{height:"42rem"}} src={third} alt="Third slide"/>
                <div class="carousel-caption " >
                  <h1>Just Prepare Yourself </h1>
                    <p>Most Expert Soldier Using The Best Costume</p>
                </div>
            </div>
          </div>
        </div>
    // <MovieLayout backgroundClassName={classes.background}>
    //   {/* Increase the network loading priority of the background image. */}
    //   <img style={{ display: 'none' }} src={backgroundImage} alt="" />
    //   <Typography color="inherit" align="center" variant="h2" marked="center">
    //     Enjoy The Movie
    //   </Typography>
    //   <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
    //     Enjoy offering cinema ticket prices up to -70% by subscribing with us
    //   </Typography>
      /* <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component={linkProps => (
          <Link {...linkProps} href="/premium-themes/onepirate/sign-up" variant="button" />
        )}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography> */
    /* </MovieLayout> */
  );
}

// ProductHero.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ProductHero);
export default ProductHero;