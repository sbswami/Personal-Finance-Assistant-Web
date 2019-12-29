import * as React from 'react';
import { Grid, TextField } from '@material-ui/core';

import { useStyles } from '../AuthStyle';
import { LogInUser } from '../logInComponent/constants';

export function LogInForm(props: LogInProps) {
  const classes = useStyles({});
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid className={classes.tile} item>
        <TextField
          fullWidth
          required
          type='email'
          placeholder='Email'
          value={props.loginData.email}
          name='email'
          onChange={e => props.onChange('email', e.target.value)}
          label="Email"
          variant="outlined"
        />
      </Grid>
      <Grid className={classes.tile} item>
        <TextField
          fullWidth
          required
          type='password'
          placeholder='Password'
          value={props.loginData.password}
          name='password'
          onChange={e => props.onChange('password', e.target.value)}
          label="Password"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}

interface LogInProps {
  loginData: LogInUser;
  onChange: (key: string, value: string) => void;
}
