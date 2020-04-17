import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BlogThumbnail from '../../common/BlogThumbnail/BlogThumbnail'

export default class extends Component {
    
  render () {
    return (
        <div className={'ucna-container-white-bg'}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <h2>Tech</h2>
                        <BlogThumbnail />
                        <BlogThumbnail />
                        <BlogThumbnail />
                    </Grid>
                    <Grid item xs={4}>
                        <h2>Beauty</h2>
                        <BlogThumbnail />
                        <BlogThumbnail />
                        <BlogThumbnail />
                    </Grid>
                    <Grid item xs={4}>
                        <h2>Home</h2>
                        <BlogThumbnail />
                        <BlogThumbnail />
                        <BlogThumbnail />
                    </Grid>
                </Grid>

            </Container>
      </div>
    )
  }
}