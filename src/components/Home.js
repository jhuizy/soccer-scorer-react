import React from 'react'
import Grid from 'material-ui/Grid'
import Login from './Login'

const Home = () => (
  <Grid container>
    <Grid item xs={12} >
      <Grid container justify="center">
        <Login />
      </Grid>
    </Grid>
  </Grid>
)

export default Home;