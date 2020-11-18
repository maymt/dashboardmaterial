import React from 'react';
import {Card, Typography, CardContent, CardActions} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Graphics from '../components/Graphics';


const useStyles= makeStyles(()=>({
    root:{
        textAlign: 'center',
    }
}));

function Cards(props) {
  const classes=useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Graphics />
      </CardContent>
    </Card>
  );
}

export default Cards;
