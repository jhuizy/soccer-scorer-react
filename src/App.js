import './App.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home';
import Ladder from './components/Ladder';

const styles = theme => ({
  root: {
    flex: 1
  },
  content: {
    marginTop: 20,
    flex: 1
  }
})

const ToolbarButton = ({text, link}) => (
  <Link to={link}>
    <Button color="contrast">
      {text}
    </Button>
  </Link>
)

class App extends Component {

  _renderButtons() {
    const buttons = [
      { text: 'Home', link: '/' },
      { text: 'Ladder', link: '/ladder' },
      { text: 'Login', link: '/login' }
    ]

    return buttons.map(b => ToolbarButton(b))
  }

  render() {

    const { classes } = this.props;

    return (
      <Router>
        <MuiThemeProvider>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Grid container justify="flex-start" direction="row">
                  {this._renderButtons()}
                </Grid>
              </Toolbar>
            </AppBar>
            <div className={classes.content}>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Home} />
              <Route path="/ladder" component={Ladder} />
            </div>
          </div>
        </MuiThemeProvider>


      </Router>
    );
  }
}

export default withStyles(styles)(App);
