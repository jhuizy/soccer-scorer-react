import React from 'react';
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'

const styles = theme => ({
  card: {
    flex: 1
  },
  text: {
    flex: 1,
    padding: 10
  }
})

const Login = (props) => {

  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        title="Login"
        subtitle="Enter your information below"
      />
      <CardContent>
        <Grid container direction="column">
          <TextField
            className={classes.text}
            hintText="Username" />
          <TextField
            className={classes.text}
            hintText="Password"
            type="password" />
        </Grid>
      </CardContent>
      <CardActions>
        <Button dense color="primary">Login</Button>
      </CardActions>

    </Card>
  );
}

export default withStyles(styles)(Login);