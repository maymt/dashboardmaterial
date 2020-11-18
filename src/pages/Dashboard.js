import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../components/Navbar";
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import CardsHeader from '../components/CardsHeader';
import Graphics from '../components/Graphics';
import TableMaterial from '../components/TableMaterial';

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">


const useStyles= makeStyles(()=>({
	root:{
		flexGrow: 1
	},
	iconos:{
		color: 'white'
	},
	container:{
		paddingTop: '40px',
		alignItems: 'center'
	},
	containerGrafica:{
		marginTop: '40px'
	},
	containerTabla:{
		marginTop: '40px'
	}
}));

const data = [
	{
		nguia:	"123456",
		cliente:	"Melón Hormigones",
		fecha:	"01-12-2020 09:30",
		ocobra:	"OB123456-001",
		puntual:	"Sí",
		estimada:	"00:45:00",
		llegada:	"09:34:53",
		salida:	"10:40:31",
		real:	"01:06:34",
		adicional:	"00:20:38",
		cobro:	"0,5 UF"
	},
	{
		nguia:	"123456",
		cliente:	"Melón Hormigones",
		fecha:	"01-12-2020 09:30",
		ocobra:	"OB123456-001",
		puntual:	"Sí",
		estimada:	"00:45:00",
		llegada:	"09:34:53",
		salida:	"10:40:31",
		real:	"01:06:34",
		adicional:	"00:20:38",
		cobro:	"0,5 UF"
	}
];

function Dashboard(props) {
	const classes= useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Navbar/>
				</Grid>

				<Grid item xs={11} sm={6} md={6} lg={6} xl={6}>
					<CardsHeader/>
				</Grid>
				<Grid item xs={11} sm={6} md={6} lg={6} xl={6}>
					<CardsHeader / >
				</Grid>

				<Grid item xs={12} className={classes.containerTabla}>
					<TableMaterial data={data}/>
				</Grid>
			</Grid>
		</div>
	);
}

export default Dashboard;
