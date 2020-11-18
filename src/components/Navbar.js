import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/img/logo-blanco.png';

const useStyles = makeStyles(()=>({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: '16px'
	},
	title: {
		flexGrow: 1	
	},
	borderRadius: '50%'
}));

function Navbar() {
	const classes = useStyles();
	return (
		<div className = {classes.root}>
			<AppBar position = "static" style={{ background: '#006C90'}}>
				<Toolbar>
					<IconButton edge = "start" className = {"classes.menuButton"} color = "inherit">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						MVP Sobrestadía
					</Typography>
					<IconButton color="inherit">
						<img src={logo} width="100px" height="40px" className={classes.imagen}/>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;