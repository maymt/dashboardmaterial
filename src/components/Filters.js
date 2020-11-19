import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Filters() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate>
      <Grid>
      <Autocomplete
        id="size-small-standard"
        size="small"
        options={top100Films}
        getOptionLabel={(option) => option.obra}
        defaultValue={top100Films[1]}
        renderInput={(params) => (
        <TextField {...params} variant="standard" label="Obra" placeholder="OBxxxxxx" />
        )}
      />
      <Autocomplete
        id="size-small-standard"
        size="small"
        options={top100Films}
        getOptionLabel={(option) => option.rut}
        defaultValue={top100Films[1]}
        renderInput={(params) => (
        <TextField {...params} variant="standard" label="Razón Social" placeholder="xxxxxxxx-x" />
        )}
      />
      <Autocomplete
        id="size-small-standard"
        size="small"
        options={top100Films}
        getOptionLabel={(option) => option.nombre}
        defaultValue={top100Films[1]}
        renderInput={(params) => (
        <TextField {...params} variant="standard" label="Nombre Razón Social" placeholder="Inmob..." />
        )}
      />
      </Grid>
      <Grid>
        <TextField
          id="desde-datetime"
          label="Desde: "
          type="datetime-local"
          defaultValue="2019-12-31T09:00"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="hasta-datetime"
          label="Hasta: "
          type="datetime-local"
          defaultValue="2019-12-31T09:00"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </form>
  );
}


  const top100Films = [
  { obra: 'OB123456', rut: '19943312-k' , nombre: 'Inmbobiliaria 1'},
  { obra: 'OB123457', rut: '19723312-k' , nombre: 'Inmbobiliaria 2'},
  { obra: 'OB123458', rut: '19743312-k' , nombre: 'Inmbobiliaria 3'},
  { obra: 'OB123459', rut: '20083312-k' , nombre: 'Constructora 1'},
  { obra: 'OB123460', rut: '19573312-k' , nombre: 'Constructora 2'},
  { obra: 'OB123461', rut: '19933312-k' , nombre: 'Constructora 3'},
  { obra: 'OB123461', rut: '19943312-k' , nombre: 'Persona 1'}]
