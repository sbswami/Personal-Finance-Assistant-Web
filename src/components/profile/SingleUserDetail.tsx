import * as React from 'react';
import { Grid } from '@material-ui/core';

import { UserDetail } from './contants';
import { useStyles } from './ProfileStyle';

export function SingleUserDetail(userData: UserDetail) {
  const classes = useStyles({});
  return (
    <React.Fragment>
      <Grid container item>
        <Grid className={classes.keySide} item>
          Full Name:
        </Grid>
        <Grid className={classes.valueSide} item>
          {userData.fullName}
        </Grid>
      </Grid>
      <Grid container item>
        <Grid className={classes.keySide} item>
          Email:
          </Grid>
        <Grid className={classes.valueSide} item>
          {userData.email}
        </Grid>
      </Grid>
      <Grid container item>
        <Grid className={classes.keySide} item>
          Phone:
          </Grid>
        <Grid className={classes.valueSide} item>
          {userData.phone}
        </Grid>
      </Grid>
      <Grid container item>
        <Grid className={classes.keySide} item>
          Business Name:
          </Grid>
        <Grid className={classes.valueSide} item>
          {userData.businessName}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
