import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

import MdHome from 'react-icons/lib/md/home';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton href="/"  to ="/" className={classes.menuButton} color="inherit" aria-label="Menu">
          <MdHome/>                    
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Verizon Job Portal
          </Typography>
          <Button color="inherit" href="/login" className={classes.button} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>


  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);