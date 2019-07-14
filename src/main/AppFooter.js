import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from './LayoutBody';
import Typography from './Typography';
// import TextField from '../components/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#c9b7b74d',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  right: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    marginRight: theme.spacing.unit,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  language: {
    marginTop: theme.spacing.unit,
    width: 150,
  },
});

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

function AppFooter(props) {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container spacing={40}>
          <Grid item xs={6} sm={4} md={2}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={16}
            >
              <Grid item className={classes.icons}>
              <Typography variant="caption">
                So come rain on my parade
                'Cause I want to feel it
                Come shove me over the edge

              </Typography>
                {/* <a href="https://material-ui.com/" className={classes.icon}>
                  <img src="/static/themes/onepirate/appFooterFacebook.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com/MaterialUI" className={classes.icon}>
                  <img src="/static/themes/onepirate/appFooterTwitter.png" alt="Twitter" />
                </a> */}
              </Grid>
              <Grid item>© 2018 Cinematix</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            
            <ul className={classes.list}>
            <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/terms">About Us</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/terms">Terms & Condition</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/terms">Privacy Policy</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/privacy">FAQ</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/privacy">Contact Us</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
{/* ----------------------------------------language------------------------------ */}
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {'Icons made by '}
              <Link href="http://kodekita.net/" title="KodeKita">
                KodeKita
              </Link>
              {' from '}
              <Link href="http://kodekita.net/" title="kodekita">
                www.kodekita.net
              </Link>
              {' is licensed by '}
              <Link
                href="http://kodekita.net/"
                title="kodekita"
                target="_blank"
                rel="noopener noreferrer"
              >
                BY KodeKita Group For Cinematix
              </Link>
            </Typography>
          </Grid>
        </Grid>

        {/* <div className={classes.right}>
          <Typography variant="caption">
                testing
          </Typography>
        </div> */}
        
      </LayoutBody>
    </Typography>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  pure,
  withStyles(styles),
)(AppFooter);