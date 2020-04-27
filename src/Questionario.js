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
import {
  FormControl,
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
  const schema = require('./schema.json');
  const title = schema['title'];
  const description = schema['description'];
  const questions = schema['questions'];

  const compatibleTypes = {
    alternativa(question) {
      return (
        <FormControl component="fieldset" className={classes.combo}>
          <FormLabel component="legend">{question['title']}</FormLabel>
          <RadioGroup aria-label={question['title']} name={question['id']}>
            {
              question['valoresPossiveis'].map((valor) => (
                <FormControlLabel
                  value={valor['id']}
                  control={<Radio />}
                  label={valor['title']}
                />

              ))
            }
          </RadioGroup>
        </FormControl>
      );
    },
    multipla(question) {
      return (
        <FormControl component="fieldset" className={classes.combo}>
          <FormLabel component="legend">{question['title']}</FormLabel>
          <FormGroup>
            {
              question['valoresPossiveis'].map((valor) => (
                <FormControlLabel
                  control={<Checkbox name={valor['id']} />}
                  label={valor['title']}
                />
              ))
            }
          </FormGroup>
        </FormControl>
      );
    },
    aberta(question) {
      return (
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id={question['id']}
          label={question['title']}
          name={question['id']}
          autoFocus
        />
      );
    },
    name(question) {
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"

              fullWidth
              id={question['valoresPossiveis'][0]['id']}
              label={question['valoresPossiveis'][0]['title']}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id={question['valoresPossiveis'][1]['id']}
              label={question['valoresPossiveis'][1]['title']}
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
        </Grid>
      );
    },
    telefone(question) {
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id={question['valoresPossiveis'][0]['id']}
              label={question['valoresPossiveis'][0]['title']}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id={question['valoresPossiveis'][1]['id']}
              label={question['valoresPossiveis'][1]['title']}
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
        </Grid>
      );
    },
    email(question) {
      return (
        <TextField
          variant="outlined"
          margin="normal"          
          fullWidth
          id={question['id']}
          label={question['title']}
          name={question['title']}
          autoComplete="email"
          autoFocus
        />
      );
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BallotSharp />
        </Avatar>
        <Typography component="h1" variant="h4">
          {title}
        </Typography>
        <Typography component="subtitle1" variant="subtitle1">
          {description}
        </Typography>
        <form className={classes.form} noValidate>

          {
            questions.map((question) => {
              const component = compatibleTypes[question['tipo']];
              if (component)
                return component(question);
              return alert(`Componente não suportado: ${question['tipo']}`);
            })
          }
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
