import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BlogThumbnail from '../../common/BlogThumbnail/BlogThumbnail'

export default class extends Component {
    
  render () {
    return (
        <div className={'ucna-container-grey-bg'}>
        <Container>
            <h2>People's Review</h2>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <BlogThumbnail />
                </Grid>
                <Grid item xs={3}>
                    <BlogThumbnail />
                </Grid>
                <Grid item xs={3}>
                    <BlogThumbnail />
                </Grid>
                <Grid item xs={3}>
                    <BlogThumbnail />
                </Grid>
            </Grid>
        </Container>
        </div>
    )
  }
}