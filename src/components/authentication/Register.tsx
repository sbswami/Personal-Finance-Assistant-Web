import * as React from 'react';
import { Paper, Grid, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import { Route } from 'react-router-dom';

import { useStyles } from './AuthStyle';
import BasicInfo from './registerComponent/BasicInfo';
import EmailAndPhone from './registerComponent/EmailAndPhone';
import BusinessInfo from './registerComponent/BusinessInfo';
import { User, checkError } from './registerComponent/constants';
import { AuthService } from './../../service/AuthService';

function getSteps() {
  return ['Basic Information', 'Email and Phone', 'Bussiness Info'];
}

export function Register() {
  const classes = useStyles({});
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [user, setUser] = React.useState<User>({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    businessName: '',
    password: '',
  });
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep !== 2) {
      return increaseStep();
    }
    if (checkError(user)) {
      return window.alert('Wrong Information!');
    }
    AuthService.registerUser(
      user,
      res => {
        console.log(res);
        increaseStep();
      },
      err => {
        console.log(err);
      }
    );
  };

  const increaseStep = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const onChange = (key: string, value: string | number) => {
    setUser({ ...user, [key]: value });
  };

  const getStepContent = (step: number, routeProps) => {
    switch (step) {
      case 0:
        return (
          <BasicInfo
            onChange={onChange}
            fullName={user.fullName}
            dob={user.dob}
          />
        );
      case 1:
        return (
          <EmailAndPhone
            onChange={onChange}
            email={user.email}
            phone={user.phone}
            password={user.password}
          />
        );
      case 2:
        return (
          <BusinessInfo
            businessName={user.businessName}
            onChange={onChange}
          />
        );
      default:
        return (
          <Grid item>
            <Button variant='contained' color='primary'
              onClick={() => routeProps.history.push('/login')}
            >
              Go To Login!
            </Button>
          </Grid>
        );
    }
  }

  return (
    <React.Fragment>
      <Route render={routeProps => (
        <Grid container justify='center' alignItems='center' className={classes.root}>
          <Grid item>
            <Paper className={classes.paper}>
              <Grid container direction='column'>
                <Grid item>
                  <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                      const stepProps: { completed?: boolean } = {};
                      const labelProps: { optional?: React.ReactNode } = {};
                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </Grid>
                <Grid item container justify='center' alignItems='center'>
                  {getStepContent(activeStep, routeProps)}
                </Grid>
                <Grid item container justify='flex-end'>
                  <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => {
                    window.location.href = 'http://localhost:3000/users/auth/google';
                  }}
                  className={classes.button}
                  >
                    Sign Up with Google
                  </Button>
                  <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => routeProps.history.push('/login')}
                  className={classes.button}>
                    LogIn
                    </Button>
                  {activeStep === steps.length || (
                    <div>
                      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                        Back
                    </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  )}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )} />
    </React.Fragment>
  );
}
