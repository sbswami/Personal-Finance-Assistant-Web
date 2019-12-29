import * as React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useStyles } from '../AuthStyle';

export default function BusinessInfo(props: BusinessInfoProps) {
  const classes = useStyles({});
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid className={classes.tile} item>
        <TextField
          fullWidth
          required
          placeholder='Business Name'
          value={props.businessName}
          name='businessName'
          onChange={e => props.onChange('businessName', e.target.value)}
          label="Business Name"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}

interface BusinessInfoProps {
  businessName: string;
  onChange: (key: string, vlaue: string) => void;
}
