import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {withStyles,makeStyles} from '@material-ui/core/styles';

const StyledTableCell= withStyles(()=>({
  head:{
    color: 'white',
    background: '#006C90',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  body:{
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function TableMaterial(props) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Guía Despacho</StyledTableCell>
            <StyledTableCell>Cliente</StyledTableCell>
            <StyledTableCell>Fecha</StyledTableCell>
            <StyledTableCell>OC Obra</StyledTableCell>
            <StyledTableCell>Puntualidad</StyledTableCell>
            <StyledTableCell>Estadia Estimada</StyledTableCell>
            <StyledTableCell>Llegada Obra</StyledTableCell>
            <StyledTableCell>Salida Obra</StyledTableCell>
            <StyledTableCell>Estadía Real</StyledTableCell>
            <StyledTableCell>Minutos Adicionales</StyledTableCell>
            <StyledTableCell>Cobro</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>{props.data.map(elemento=>(
          <TableRow key={elemento.id}>
          <TableCell align="center">{elemento.nguia}</TableCell>
          <TableCell align="center">{elemento.cliente}</TableCell>
          <TableCell align="center">{elemento.fecha}</TableCell>
          <TableCell align="center">{elemento.ocobra}</TableCell>
          <TableCell align="center">{elemento.puntual}</TableCell>
          <TableCell align="center">{elemento.estimada}</TableCell>
          <TableCell align="center">{elemento.llegada}</TableCell>
          <TableCell align="center">{elemento.salida}</TableCell>
          <TableCell align="center">{elemento.real}</TableCell>
          <TableCell align="center">{elemento.adicional}</TableCell>
          <TableCell align="center">{elemento.cobro}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableMaterial;
