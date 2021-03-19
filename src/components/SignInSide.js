import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AuthSection from './AuthSection';
import SectionHeader from './SectionHeader';
import { useRouter } from './../util/router';

function Copyright(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Manage your Employees
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const CredentialsBox = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Box>
        Employee Email: jane@example.com<br/>
        Employee Password: password<br/>
        HR Email: hr@gmail.com<br/>
        HRPassword: password<br/>
        AdminEmail: admin@gmail.com<br/>
        Admin Password: password<br/>
      </Box>
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

export default function SignInSide(props) {
  const classes = useStyles();
  const router = useRouter();

  console.info(router.query.type)
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box textAlign={props.textAlign}>
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={props.headerSize}
            />
            <CredentialsBox />
          </Box>
          <AuthSection
            bgColor={props.bgColor}
            size={props.size}
            bgImage={props.bgImage}
            bgImageOpacity={props.bgImageOpacity}
            type="signin"
            providers={["google", "facebook", "twitter"]}
            afterAuthPath={router.query.next || "/dashboard"}
          />
          <Copyright sx={{ mt: 5 }} />
        </Grid>
    </Grid>
  );
}