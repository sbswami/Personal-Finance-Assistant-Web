import * as React from 'react';
import { Route } from 'react-router-dom';
import { Grid, Divider, Typography, TextField, Button } from '@material-ui/core';

import { ProfileService } from '../../service/ProfileService';
import { UserDetail } from './contants';
import { useStyles } from './ProfileStyle';
import { SingleUserDetail } from './SingleUserDetail';
import { SocketService as socket } from '../../service/SocketService';

export function Profile() {

  const classes = useStyles({});
  const [search, setSearch] = React.useState<string>('');
  const [searchList, setSearchList] = React.useState<UserDetail[]>([]);
  const [userData, setUserData] = React.useState<UserDetail>({
    id: '',
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    businessName: '',
  });

  const userDetail = () => {
    ProfileService.getDetail(
      res => {
        return setUserData(res['user']);
      },
      err => console.error(err),
    );
  }

  const handleSearch = () => {
    ProfileService.getUserList(
      search,
      res => setSearchList(res['data']),
      err => window.alert('Something Went Wrong!'),
    );
  }

  React.useEffect(() => {
    if (!userData.id) {
      localStorage.setItem('profile-start', (new Date().getTime()).toString());
      userDetail();
      return;
    }
    return () => {
      let OSName = "Unknown OS";
      let geo = {
        lon: 0,
        let: 0,
      };
      if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
      if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
      if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
      if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
      let screenLog = {
        screen: 'profile',
        browser: 'Chrome',
        country: 'IN',
        geo,
        os: OSName,
        timeSpent: ((new Date()).getTime() - Number(localStorage.getItem('profile-start')))/1000,
        userId: userData.id,
        fullName: userData.fullName,
        dob: userData.dob,
        phone: userData.phone,
        email: userData.email,
        businessName: userData.businessName,
      };
      socket.socket.emit('user-track', screenLog);
      /// TODO: SSL wasn't applied | Add SSL and use it
      // if (navigator.geolocation) {
      //   navigator.geolocation.watchPosition(position => {
      //     geo.lon = position.coords.longitude;
      //     geo.let = position.coords.latitude;
          
      //   });
      // }
    };
  }, [userData]);

  return (
    <Route render={routeProps => (
      <Grid container direction='column'>
        <Grid container item direction='row' alignItems='center' justify='space-between'>
          <Grid item>
            <Typography variant="h6" noWrap>
              User Information
            </Typography>
          </Grid>
          <Grid item>
            <Grid container alignItems='center'>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  type='text'
                  placeholder='Search Other User'
                  value={search}
                  name='Search'
                  onChange={e => setSearch(e.target.value)}
                  label="Search"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleSearch}
                >
                  Search
            </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant='subtitle1' noWrap>
          Search Result
        </Typography>
        <Divider />
        {searchList.map(singleUserDetail => {
          return (
            <React.Fragment key={singleUserDetail.id}>
              <SingleUserDetail {...singleUserDetail} />
              <Divider />
            </React.Fragment>
          );
        })}
        <Divider />
        <Typography variant='subtitle1' noWrap>
          My Detail
        </Typography>
        <Divider />
        <SingleUserDetail
          {...userData}
        />
        <Divider />
      </Grid>
    )} />
  );
}
