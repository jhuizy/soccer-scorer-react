import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Home from './components/Home';

const styles = theme => ({
  root: {
    flex: 1
  },
  content: {
    marginTop: 20,
    flex: 1
  }
})

const App = (props) => {

  const { classes } = props;

  return (
    <MuiThemeProvider>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Soccer Scorer
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <Home />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
