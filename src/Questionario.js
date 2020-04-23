import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormGroup
} from '@material-ui/core';
import BallotSharp from '@material-ui/icons/BallotSharp';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Clone Forms
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  combo: {
    width: '100%', // Fix IE 11 issue
    
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BallotSharp />
        </Avatar>
        <Typography component="h1" variant="h4">
          Breafing Completo
        </Typography>
        <Typography component="subtitle1" variant="subtitle1">
         Descrição do formulário
        </Typography>
        <form className={classes.form} noValidate>
          <FormControl component="fieldset" className={classes.combo}>
              <FormLabel component="legend">1. Qual seu time?</FormLabel>
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel value="bahia" control={<Radio />} label="Bahia" />
                <FormControlLabel value="vitoria" control={<Radio />} label="Vitória" />
                <FormControlLabel value="fluminense" control={<Radio />} label="Fluminense" />
                <FormControlLabel value="outro" control={<Radio />} label="Outro" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.combo}>
                <FormLabel component="legend">2. Quais títulos seu time já ganhou?</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="baiano" />}
                    label="Baiano"
                  />
                  <FormControlLabel
                    control={<Checkbox name="nordestao" />}
                    label="Nordestão"
                  />
                  <FormControlLabel
                    control={<Checkbox name="copa" />}
                    label="Copa do Brasil"
                  />
                  <FormControlLabel
                    control={<Checkbox name="brasileiro" />}
                    label="Campeonato Brasileiro"
                  />
                </FormGroup>
              </FormControl>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Qual o maior jogador do seu time?"
                name="email"
                autoComplete="email"
                autoFocus
              />  
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"                
                fullWidth
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="Sobrenome"
                label="DDD"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Telefone"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
          </Grid>          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Qual seu email?"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enviar
          </Button>          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
