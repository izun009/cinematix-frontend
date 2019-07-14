import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import LayoutBody from './LayoutBody';
import Typography from './Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexWrap: 'wrap',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function movieCategory(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://wallpapersultra.net/wp-content/uploads/1920x1200-Coolest-Wallpaper.jpg',
      title: 'Adventure',
      width: '40%',
    },
    {
      url:
        'https://wallpapersultra.net/wp-content/uploads/Amazing-Coolest-Wallpaper.jpg',
      title: 'Drama',
      width: '20%',
    },
    {
      url:
        'https://wallpapersultra.net/wp-content/uploads/Backgrounds-Coolest-Wallpaper.jpg',
      title: 'Action',
      width: '40%',
    },
    {
      url:
        'https://wallpapersultra.net/wp-content/uploads/Awesome-Coolest-Wallpaper.jpg',
      title: 'Racing',
      width: '38%',
    },
    {
      url:
        'https://wallpapersultra.net/wp-content/uploads/Beautiful-Coolest-Wallpaper-HD.jpg',
      title: 'Fantasy',
      width: '38%',
    },
    {
      url:
        'https://wallpapersultra.net/wp-content/uploads/Beautiful-Coolest-Wallpapers.jpg',
      title: 'Technology',
      width: '24%',
    },
    {
      url:
        'https://wallpapersultra.net/wp-content/uploads/Best-HD-Coolest-Wallpaper.jpg',
      title: 'War',
      width: '40%',
    },
    {
      url:
        'https://wallpapersultra.net/wp-content/uploads/Coolest-Wallpaper-1080p-Resolution.jpg',
      title: 'Horror',
      width: '20%',
    },
    {
      url:
        'https://wallpapersultra.net/wp-content/uploads/Coolest-Background-Wallpaper.jpg',
      title: 'Fiction',
      width: '40%',
    },
  ];

  return (
    <div className={classes.LayoutBody}>
    <Grid container className={classes.right}>
    <LayoutBody className={classes.root} component="section" width="large">
      <Typography variant="h4" marked="center" align="center" component="h2">
        For All The Movies Categories
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </LayoutBody>
    </Grid>
    </div>
  );
}

movieCategory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(movieCategory);