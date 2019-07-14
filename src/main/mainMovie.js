import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from './LayoutBody';
// import Typography from '@material-ui/core/Typography';
import Typography from './Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#4545aa1a',
    overflow: 'hidden',
    // flexGrow: 1,
    // display: 'flex',
    // overflow: 'hidden',
    
    // backgroundColor: theme.palette.secondary.dark,
  },
  layoutBody: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 15,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    // marginTop: theme.spacing.unit * 15,
    // marginBottom: theme.spacing.unit * 30,
    // display: 'flex',
    // position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },

  //pake card
  card: {
    maxWidth: 300,
    margin: "0 1rem",
    marginTop: theme.spacing.unit * 3,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  left:{
    marginLeft: theme.spacing.unit * 5,
  },
  right: {
    // margin: theme.spacing.unit * 2,
    // padding: theme.spacing.unit * 1,
    margin: '7px',
    padding: '10px',
    marginTop: theme.spacing.unit * 10,
    // marginBottom: theme.spacing.unit * 5,
    // padding: `0px ${theme.spacing.unit * 5}px`,
  },
});

function mainMovie(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

{/* Layout untuk comming soon */}

    <div className={classes.LayoutBody}>
      <Typography 
       variant="h4" 
       marked="center" 
       align="center" 
       component="h2"
       style={{marginTop: 79,marginBottom:1,}}
       
      >
        COMMING SOON
      </Typography>

    <Grid container className={classes.right}>

    <Card className={classes.card} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Avenger"
          className={classes.media}
          height="375"
          image="https://www.hdwallpapers.in/download/skull_and_bones_e3_2017_4k_8k-wide.jpg"
          title="Avenger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pirates of Carribean
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" >
          Order
        </Button>
      </CardActions>
    </Card>
    
    <Card className={classes.card} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Avenger"
          className={classes.media}
          height="375"
          image="https://www.setaswall.com/wp-content/uploads/2017/03/Planets-4K-Ultra-HD-Wallpaper-3840x2160.jpg"
          title="Avenger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dragon Hunter
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" >
          Order
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.card} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Avenger"
          className={classes.media}
          height="375"
          image="https://www.setaswall.com/wp-content/uploads/2017/03/Mountain-4K-Ultra-HD-Wallpaper-3840x2160-768x432.jpg"
          title="Avenger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rokok Membunuhmu
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" >
          Order
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.card} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Avenger"
          className={classes.media}
          height="375"
          image="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg"
          title="Avenger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Black Bones
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" >
          Order
        </Button>
      </CardActions>
    </Card>

    </Grid>


{/* Layout untuk now playing */}


    <div className={classes.LayoutBody}>
      <Typography 
       variant="h4" 
       marked="center" 
       align="center" 
       component="h2"
       style={{marginTop: 79,marginBottom:1,}}
       
      >
        NOW PLAYING
      </Typography>
    </div>

    <Grid container className={classes.right}>
    
    <Card className={classes.card} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Car"
          className={classes.media}
          height="375"
          image="https://cdn.pixabay.com/photo/2014/10/26/17/19/fishermen-504098_960_720.jpg"
          title="Car"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cat Witch
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" >
          Order
        </Button>
      </CardActions>
    </Card>
    
    <Card className={classes.card} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Dark Dimension"
          className={classes.media}
          height="375"
          image="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg"
          title="Dark Dimension"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dark Dimension
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" >
          Order
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.card} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Last War"
          className={classes.media}
          height="375"
          image="https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_960_720.jpg"
          title="Last War"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Last War
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" >
          Order
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.card} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Sunset"
          className={classes.media}
          height="375"
          image="https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_960_720.jpg"
          title="Sunset"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Last Sunset
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" >
          Order
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.card} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Night Sky"
          className={classes.media}
          height="375"
          image="https://cdn.pixabay.com/photo/2014/12/08/02/59/bench-560435_960_720.jpg"
          title="Night Sky"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Night Sky
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" >
          Order
        </Button>
      </CardActions>
    </Card>
    
    <Card className={classes.card} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="5000 Feet"
          className={classes.media}
          height="375"
          image="https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_960_720.jpg"
          title="5000 Feet"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            5000 Feet
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" >
          Order
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.card} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Ghost Town"
          className={classes.media}
          height="375"
          image="https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129_960_720.jpg"
          title="Ghost Town"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ghost Town
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" >
          Order
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.card} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Bridge"
          className={classes.media}
          height="375"
          image="https://cdn.pixabay.com/photo/2013/05/12/18/55/balance-110850_960_720.jpg"
          title="Bridge"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Night Bridge
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" >
          Order
        </Button>
      </CardActions>
    </Card>


    </Grid>
  </div>
  </div>
  );
}


mainMovie.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(mainMovie);