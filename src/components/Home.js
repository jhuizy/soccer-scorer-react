import React from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Login from './Login'

const styles = theme => ({
  login: {
    flex: 1
  }
})

const Home = (props) => {

  const { classes } = props 

  return (
  <Grid container justify="center">
    <Grid item xs={4} >
      <Grid container justify="center">
        <Login className={classes.login}/>
      </Grid>
    </Grid>
  </Grid>
)}

export default withStyles(styles)(Home);