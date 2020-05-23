import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Link
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    color: 'white',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" className={classes.menuButton}>
              <HomeIcon className={classes.icon}/>
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Vinkelboda
          </Typography>
          <Link to="/profile">
            <IconButton edge="start" className={classes.menuButton}>
              <AccountCircleIcon className={classes.icon}/>
            </IconButton>
          </Link>
          <Button className={classes.icon}>Logga in</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

