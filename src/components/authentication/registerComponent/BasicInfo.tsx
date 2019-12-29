import * as React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useStyles } from '../AuthStyle';

export default function BasicInfo(props: BasicInfoProps) {
  const classes = useStyles({});
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid className={classes.tile} item>
        <TextField
          fullWidth
          required
          placeholder='Full Name'
          value={props.fullName}
          name='fullName'
          onChange={e => props.onChange('fullName', e.target.value)}
          label="Full Name"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          required
          type='date'
          value={props.dob}
          name='dob'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={e => props.onChange('dob', e.target.value)}
          label='Date of Birthday'
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}

interface BasicInfoProps {
  fullName: string;
  dob: string;
  onChange: (key: string, vlaue: string | number) => void;
}
