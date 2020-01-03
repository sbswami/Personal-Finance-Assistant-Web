import * as React from 'react';
import { Paper, Grid, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import { Route } from 'react-router-dom';

import { useStyles } from './AuthStyle';
import { AuthService } from './../../service/AuthService';
import { LogInForm } from './logInComponent/LogInForm';
import { LogInUser } from './logInComponent/constants';
import { TOKEN_KEY } from '../../common/config';

export function LogIn() {
  const classes = useStyles({});
  const [logInUser, setLogInUser] = React.useState<LogInUser>({
    email: '',
    password: '',
  });

  const handleLogin = (routeProps) => {
    AuthService.logInUser(
      logInUser,
      res => {
        localStorage.setItem(TOKEN_KEY, `JWT ${res['token']}`);
        routeProps.history.push('/home');
      },
      err => window.alert('Something Went Wrong!'),
    );
  };

  const onChange = (key: string, value: string | number) => {
    setLogInUser({ ...logInUser, [key]: value });
  };

  return (
    <Route
      render={routeProps => (
        <React.Fragment>
          <Grid container justify='center' alignItems='center' className={classes.root}>
            <Grid item>
              <Paper className={classes.paper}>
                <Grid container direction='column'>
                  <Grid item container justify='center' alignItems='center'>
                    <LogInForm
                      loginData={logInUser}
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item container justify='flex-end'>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleLogin(routeProps)}
                      className={classes.button}
                    >
                      LogIn
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    />
  );
}

