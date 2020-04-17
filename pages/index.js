import React, { Component } from 'react'

// import components
import Header from '../components/Header/Header'
import HomeSlider from '../components/Home/HomeSlider/HomeSlider'
import Banner from '../components/Home/Banner/Banner'
import Highlights from '../components/Home/Highlights/Highlights'
import CategoryColumns from '../components/Home/CategoryColumns/CategoryColumns'
import PeopleReview from '../components/Home/PeopleReview/PeopleReview'
import Suggestions from '../components/Suggestions/Suggestions'
import Footer from '../components/Footer/Footer'

export default class extends Component {
  render () {
    return (
      <React.Fragment>
          <Header />
          <HomeSlider/>
          <Banner />
          <Highlights />
          <CategoryColumns />
          <PeopleReview />
          <Suggestions />
          <Footer />
      </React.Fragment>
    )
  }
}