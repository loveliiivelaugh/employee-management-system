import * as React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import IconButton from "@material-ui/core/IconButton";
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//componentsss
import AuthSection from './AuthSection';
import SectionHeader from './SectionHeader';
//utilitiess
import { useRouter } from './../util/router';
import useDarkMode from "use-dark-mode";

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
  const darkMode = useDarkMode();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box textAlign={props.textAlign}>
            <IconButton
              color="inherit"
              onClick={darkMode.toggle}
              style={{ opacity: 0.6 }}
            >
              {darkMode.value && <NightsStayIcon />}

              {!darkMode.value && <WbSunnyIcon />}
            </IconButton>
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={props.headerSize}
            />
            <CredentialsBox />
            <LockOutlinedIcon />
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