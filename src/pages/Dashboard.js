import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import TableMaterial from '../components/TableMaterial';
import Graphics from '../components/Graphics';


const useStyles = makeStyles(()=>({
	root: {
		flexGrow: 1
	},
	iconos: {
		color: 'white'
	},
	container: {
		alignItems: 'center',
		paddingTop: '40px'
	},
	containerGrafica: {
		marginTop: '40px',
		alignItems: 'center'
	},
	containerTabla: {
		marginTop: '40px',
		marginLeft: '40px'
	}
}));

const data = [
    {
      id:1,
      video:
        "Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
      fecha: "6 de sep. 2020",
      visualizaciones: 32,
      imagen: require("../assets/img/logo.png"),
    },
    {
      id:2,
        video:
          "Cómo Solucionar Error al Crear Applicación de React JS",
        fecha: "5 de sep. 2020",
        visualizaciones: 31,
        imagen: require("../assets/img/logo-blanco.png"),
      },
      {
      id:3,
        video:
          "Cómo Utilizar Forever en Node JS || Ejecutar Node JS en Segundo Plano || Background Node JS",
        fecha: "4 de sep. 2020",
        visualizaciones: 21,
        imagen: require("../assets/img/camion-3.jpg"),
      },
  ];

function Dashboard(props) {
    const classes= useStyles();
    return (
        <div className={classes.root}>
			<Grid container spacing={3}>	
				<Grid item xs={12}>
                    <Navbar/>
                </Grid>
            </Grid>

			<Grid container spacing={3} className={classes.containerTabla}>
				<Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.containerGrafica}>
                	<Graphics />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.containerGrafica}>
                	<Graphics />
                </Grid>
			</Grid>

			<Grid container spacing={3} className={classes.containerTabla}>
				<Grid item xs={11}>
					<TableMaterial data={data}/>
				</Grid>
			</Grid>
        </div>
    );
}

export default Dashboard;