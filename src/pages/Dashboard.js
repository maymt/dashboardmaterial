import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../components/Navbar";
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import CardsHeader from '../components/CardsHeader';
import DataTable from '../components/DataTable';
import Filters from '../components/Filters';

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
		marginTop: '30px'
	}
}));

function Dashboard(props) {
	const classes= useStyles();
	return (
		<div className={classes.root}>
		<Grid container spacing={3}>
		<Grid item xs={12}>
		<Navbar/>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
		<CardsHeader/>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
		<CardsHeader / >
		</Grid>


		<Grid item xs={12} className={classes.containerTabla}>
		<DataTable/>
		</Grid>
		</Grid>
		</div>
	);
}

export default Dashboard;
