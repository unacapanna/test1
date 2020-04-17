import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class extends Component {
    
  render () {
    return (
        <div className={'ucna-container-white-bg'}>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h2>Whats hot this week?</h2>
                    <Paper elevation={3} >Welcome Banner 2 - Hot this week
                        </Paper>
                </Grid>
            </Grid>
        </Container>
        </div>
    )
  }
}