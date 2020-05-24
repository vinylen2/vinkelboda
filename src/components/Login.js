import React, { useContext, useState } from 'react';
import UserContext from '../contexts/user-context.js';
// import useStyles from '../styles/style.js';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Login() {
  const user = useContext(UserContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function login() {
    console.log(username, password);
  }

  return (
    <>
      <Dialog
        open={!user.token}
        >
        <DialogTitle>{"Logga in"}</DialogTitle>
        <DialogContent>
          <form>
            <Grid container spacing={3}>
              <Grid item>
                <TextField label="Användarnamn" onChange={e => setUsername(e.target.value)}></TextField>
              </Grid>
              <Grid item>
                <TextField label="Lösenord" type="password" onChange={e => setPassword(e.target.value)}></TextField>
              </Grid>
            </Grid>

          </form>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Button variant="contained" color="secondary">Stäng</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={login}>Logga in</Button>
            </Grid>
          </Grid>

        </DialogActions>
      </Dialog>
    </>
  );
}