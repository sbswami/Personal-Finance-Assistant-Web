import * as React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useStyles } from '../AuthStyle';

export default function EmailAndPhone(props: EmailAndPhoneProps) {
  const classes = useStyles({});
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid className={classes.tile} item>
        <TextField
          fullWidth
          required
          type='email'
          placeholder='Email'
          value={props.email}
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
          type='tel'
          placeholder='Phone'
          value={props.phone}
          name='phone'
          onChange={e => props.onChange('phone', e.target.value)}
          label="Phone"
          variant="outlined"
        />
      </Grid>
      <Grid className={classes.tile} item>
        <TextField
          fullWidth
          required
          type='password'
          placeholder='Password'
          value={props.password}
          name='password'
          onChange={e => props.onChange('password', e.target.value)}
          label="Password"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}

interface EmailAndPhoneProps {
  email: string;
  phone: string;
  password: string;
  onChange: (key: string, value: string) => void;
}
