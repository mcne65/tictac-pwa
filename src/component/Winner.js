import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root:{
    flexGrow: 1,
    margin:'auto',
  },
  card:{
    minHeight:'225px',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  player:{
    display:'flex',
    flexDirection:'row',
    flexWrap: 'wrap',    
    justifyContent: 'space-around', 
    alignItems:'center',   
  },
  info:{
    alignSelf:'flex-start',
    padding:'2px',
  },
  flexGrow:{
    flex:'1 1 auto',
  }
});

class WinnerCard extends Component {
  constructor(props){
    super(props);
    this.state={};
    this.onClick=this.onClick.bind(this);
  }

onClick(){
  console.log('Reseting Game board');
}

  render() {
    const { classes, player1, player2 } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent >
            <div className={classes.player}>            
                <Typography type="display1" className={classes.info} >
                 {player1.name}
                  {` (${player1.code})`}
                  </Typography>    
              <Typography type="headline" className={classes.info}>
                {'------v/s------'}
              </Typography>             
            <Typography type="display1" className={classes.info}>
              {player2.name}
                  {` (${player2.code})`}                       
            </Typography>
          </div>
            </CardContent>
          <CardActions>
            <div className ={classes.flexGrow}/>
            <Button 
              raised
              color="primary"
              onClick={this.onClick}
            >
            Restart Game
            </Button>
            <div className={classes.flexGrow} />            
          </CardActions>
        </Card>
      </div>
    );
  }
}

WinnerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WinnerCard);
