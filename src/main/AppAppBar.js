import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import AppBar from '../components/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
// import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  root: {
    flexGrow: 1,
  },
  // placeholder: toolbarStyles(theme).root,
  // toolbar: {
  //   justifyContent: 'space-between',
  // },
  grow: {
    flexGrow: 1,
  },
  left: {
    flex: 1,
    display: 'flex',
  },
  // leftLinkActive: {
  //   color: theme.palette.common.white,
  // },
  right: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit * 5,
  },
  rightSedikit: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit * 6,
  },
  // linkSecondary: {
  //   color: theme.palette.secondary.main,
  // },
  search: {
    position: 'relative',
    // flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: '#2d2d2d4d'}}>
        <Toolbar>

          <Link
            variant="h6"
            underline="hover"
            color="inherit"
            href="/"
          >
            <Typography 
              variant="h4" 
              color="inherit" 
              className={classes.grow}
              href="/"
            >
            CINEMA-TIX
            </Typography>
          </Link>

          <div className={classes.rightLink}/>

          <Button color="inherit" href="/" >HOME</Button>
          <Button color="inherit" href="/now" >NOW</Button>
          <Button color="inherit" href="/comingsoon" >Comming Soon</Button>


          <div className={classes.right}>
            <Button color="inherit" href="/login">Sign In</Button>
            <Button color="inherit" href="/signup">Sign Up</Button>
          </div>

        </Toolbar>
      </AppBar>
      <div />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);