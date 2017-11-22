import React from 'react';
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'

const styles = theme => ({
  card: {
    mindWidth: 275,
    maxWidth: 275
  },
  text: {
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
        <TextField
          hintText="Username" />
        <TextField
          className={classes.text}
          hintText="Password"
          type="password" />
      </CardContent>
      <CardActions>
        <Button label="Login" />
      </CardActions>

    </Card>
  );
}

export default withStyles(styles)(Login);