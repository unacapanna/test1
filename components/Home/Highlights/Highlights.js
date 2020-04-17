import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BlogThumbnail from '../../common/BlogThumbnail/BlogThumbnail'
import Paper from '@material-ui/core/Paper';

export default class extends Component {
    
  render () {
    return (
        <div className={'ucna-container-grey-bg'}>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <h6>Emotional Header and Category</h6>
                    <Paper elevation={3} >A nice banner
                    </Paper>

                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <BlogThumbnail />
                        </Grid>
                        <Grid item xs={4}>
                            <BlogThumbnail />
                        </Grid>
                        <Grid item xs={4}>
                            <BlogThumbnail />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3} >Google Ads here
                        </Paper>
                </Grid>
            </Grid>
        </Container>
        </div>
    )
  }
}